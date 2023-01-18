import express, { request } from 'express';
import cors from 'cors';
import './sqlConnect';
import { signup } from './services/signup';
import { getLoginStatus, login, logout } from './services/login';
// import * as session from 'express-session';
const session = require('express-session');


const app = express();

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

app.get('/logout', logout);
app.get('/login', getLoginStatus);
app.post('/signup', signup)
app.post('/login', login);
