import { con } from '../sqlConnect';

export function getLoginStatus(req,res){
    if(req.session.user){
        res.send( {
            status: 'success',
            user: req.session.user,
        });
    } else {
        res.send({
            status: 'error',
        });
    }
}

export function logout(req, res) {
    delete req.session.user;
    res.send();
}


export function login(req, res) {
    delete req.session.user;

    if(!req.session.attemtps){
        req.session.attemtps = 0;
    }
        if(req.session.attemtps >= 5){
            res.send({
                status: 'error',
                message: 'to many login attempts'
            });
            return;
    }
    

    const sqlQuery = "SELECT * FROM `users` WHERE `userName`=? AND `password`=MD5(?)";
    const paramArr = [req.body.userName.trim(), req.body.password.trim()];

    con.query(sqlQuery, paramArr, (err, result) => {
        if (err) {
            console.log(err);

            res.send({
                status: 'error',
                message: 'unidentified error'
            });

            return;
        }
    
        if (!result.length) {

            req.session.attemtps++;

            res.send({
                status: 'error',
                message: 'user name or password is not correct',
            });
        }
        else{
            const user = result[0];
            req.session.user = user;
        
        res.send({
            status: 'success',
            user,
            });
        }
   });
}
