const express = require('express');
const cors = require('cors');

require('./sqlConnect');

const app = express();

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: 'content-type, accept'
}));

app.use(express.json());
app.listen(3500, () => {
    console.log('Listen 3500');
});

app.get('/', (req, res) => {
    res.send("hello world<3!");
});

const contact = require('./handlers/contact');
app.get('/contact', contact.getContact);
app.post('/contact', contact.addContact);
app.put('/contact/:id/status/complete', contact.updateComplete);
app.put('/contact/:id/status/undo', contact.updateUndo);
app.delete('/contact/:id', contact.removeContact);