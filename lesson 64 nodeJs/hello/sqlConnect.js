const mySql = require('mySql');


const con = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'full-stack',
});

con.connect((err) => {
    if (err){
        throw err;
    }
    console.log("آيوا أليك - working");
});

exports.con = con;