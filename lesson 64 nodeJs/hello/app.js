const express = require('express');
require('./sqlConnect');

const app = express();

app.listen(3000, () => {
    console.log('Express server listening on port 3000');
});

app.get('/', (req, res) => {
    res.send({
       message: 'george!'
    
    });
});

app.get('/test', (req, res) => {
    res.send({
        message: 'great succsess!'
     
     });
});

const clients = require("./handlers/clients");
app.get("/clients", clients.getClients);