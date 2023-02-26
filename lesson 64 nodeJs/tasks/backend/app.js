import express, { request } from 'express';
import cors from 'cors';
import './sqlConnect';
import { signup } from './services/signup';
import { getLoginStatus, login, logout } from './services/login';
import { addTask, changeTaskLevel, changeTaskStatus, getCounterTasks, getTask, getTasks, removeTask, returnTask, updateTask } from './services/tasks';
import { addProduct, getCartProducts, getProduct, getProducts, removeProduct, restoreProduct, updateProduct } from './services/products';
// import * as session from 'express-session';
const session = require('express-session');


const app = express();

// const unGuards = [
//     '/login',
//     '/logout',
//     '/signup',
// ]

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

app.use(session({
    secret: 'my-secret',
    name: 'mySession',
    resave: false,
    saveUninitialized: false,
}));


app.use(express.json());

// app.use((req, res, next) => {
    
//     if(unGuards.includes(req.url) ||req.session.user){
//         next();
//     }else{
//         res.sendStatus(401);
//     }

// });

app.listen(3000, () => {
    console.log('listening on 3000');
});

app.get('/', (req, res) => {

    if (!req.session.attemps) {
        req.session.attemps = 0;
    }
    req.session.attemps++;
    
    res.send({
        attemps: req.session.attemps,
        message: 'כניסה נכשלה לאחר 3 נסיונות',
    });
});

function authGurd(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

app.get('/logout', logout);
app.get('/login', getLoginStatus);
app.post('/signup', signup)
app.post('/login', login);

//getCounterTasks
app.get('/tasks/counter', authGurd, getCounterTasks);
app.get('/tasks',authGurd, getTasks);
app.get('/task/:id',authGurd, getTask);
app.post('/tasks',authGurd, addTask);
app.put('/task/:id', authGurd, updateTask);
app.put('/tasks/:taskId/status/:newStatus',authGurd, changeTaskStatus);
app.put('/tasks/:taskId/level/:newLevel',authGurd, changeTaskLevel);
app.put('/tasks/restore/:returnId',authGurd, returnTask);
app.delete('/tasks/:id',authGurd, removeTask);

app.get('/products',authGurd, getProducts);
app.post('/products/cart', authGurd, getCartProducts);
app.get('/product/:id',authGurd, getProduct);
app.post('/products',authGurd, addProduct);
app.put('/product/:id', authGurd, updateProduct);
app.put('/product/restore/:id', authGurd, restoreProduct);
app.delete('/products/:id',authGurd, removeProduct);
