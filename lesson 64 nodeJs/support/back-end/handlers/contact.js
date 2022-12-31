const con = require('../sqlConnect').con;

function getContact(req, res){
    con.query("SELECT * FROM `newcontact`", (err, result) => {
        if(err){
            throw err;
        }

        res.send(result);
    });
};

function addContact(req, res){
    con.query("INSERT INTO `newcontact`(`fullName`, `email`, `phone`, `content`, `isCompleted`, `createTime`) VALUES (?,?,?,?,0,CURRENT_TIME)", [req.body.fullName, req.body.email, req.body.phone, req.body.content]
    , (err, result) => {
        if(err){
            throw err;
        }
        res.send();
    });
}


// "UPDATE `newcontact` SET `fullName`,`email`,`phone`,`content`,`isCompleted`,`createTime` WHERE id =?"

function updateComplete(req, res){
    con.query("UPDATE `newcontact` SET `isCompleted`= 1 WHERE id = ?" , [req.params.id]
    , (err, result) => {
        if(err){
            throw err;
        }
        
        res.send(result);
    });
}
function updateUndo(req, res){
    con.query("UPDATE `newcontact` SET `isCompleted`= 0 WHERE id = ?" , [req.params.id]
    , (err, result) => {
        if(err){
            throw err;
        }
        
        res.send(result);
    });
}

function removeContact(req, res){
    con.query("DELETE FROM `newcontact` WHERE `id` = ?", [req.params.id], (err, result) => {
        if(err){
            throw err;
        }
        res.send();
    });
}
exports.getContact = getContact;
exports.addContact = addContact;
exports.updateComplete = updateComplete;
exports.updateUndo = updateUndo;
exports.removeContact = removeContact;



// ALTER TABLE `new_contact` ADD `isCompleted` TINYINT(1) NOT NULL DEFAULT '0' AFTER `content`;
