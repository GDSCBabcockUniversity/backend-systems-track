require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const session = require('express-session');

app.use(session({
    secret : 'anjolasession',
    resave : true,
    saveUninitialized : true
  }));

app.get('/login', (req, res) => {
    res.render('/login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if ( username) {
        query = `SELECT * FROM user_login 
        WHERE user_name = "${username}"`
        db.query(query, (error, data) => {

            if (data.length > 0) {
                for (const user of data) {
                    if (user.user_name === username) {
                        if (user.user_password === password) {
                            req.session.user_id = user.user_id;
                        } else {
                            return res.send('Incorrect Password');
                        }
                    }
                }
                res.send('Incorrect Email Address');
            } else {
                res.send('Incorrect Email Address');
    }
        res.end();
    })
    }
});

app.get('/logout', function(req, res, next){

    req.session.destroy();

    res.redirect("/");

});


app.listen(8080, () => {
    console.log('Server is running on port 8080')
})