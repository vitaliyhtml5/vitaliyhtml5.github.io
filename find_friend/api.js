const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname,'/public');

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cookieParser());
app.use(express.static(publicDirectoryPath));

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',  
    database : 'api_friends' 
});

app.get('/login', (req, res) => res.sendFile(`${__dirname}/login.html`));
app.get('/style.css', (req, res) => res.sendFile(`${__dirname}/style.css`));
app.get('/script.js', (req, res) => res.sendFile(`${__dirname}/script.js`));
app.get('/login.js', (req, res) => res.sendFile(`${__dirname}/login.js`));
app.get('/logout.js', (req, res) => res.sendFile(`${__dirname}/logout.js`));

app.get('/', (req, res) => {
    if (!req.headers.cookie) res.sendFile(`${__dirname}/login.html`);
    else res.sendFile(`${__dirname}/index.html`);
});

app.get('/profile', (req, res) => {
    if (!req.headers.cookie) {
        res.sendFile(`${__dirname}/public/401.html`);
        res.status(401);
    }
    else res.sendFile(`${__dirname}/profile.html`)
});

app.post('/login_user',(req,res) => {
    if (req.body.email == 'test@test.com' && req.body.password == 1) {
        const user = {name: 'Vasya',age: 25,hobby: 'Botany'}
        const token = jwt.sign({id:1},'Hello world!')
        res.cookie('token',token, {
            expires: new Date(Date.now() + 1000*60*60),secure: false,httpOnly: true,sameSite: 'Strict'
        });
        res.status(200).send({user, 'accessToken':req.cookies.token,code: 200}); 
    }
    else if (req.body.email === '' || req.body.password === '') {
        res.status(400).send({code: 400,message:'Please fill all fields'});
    }
    else if (req.body.email !== 'test@test.com' || req.body.password !== 1) {
        res.status(401).send({code: 401, message: 'Incorrect password or login'})
    }
});

app.get('/logout_user',(req,res) => {
    res.clearCookie('token');
    res.status(200).send({code: 200, message: 'Cookie has been deleted'});
});

app.get('/show_users', (req, res) => {
    const q = 'SELECT * FROM friends';
    connection.query(q, (error, results) => {
        res.status(200).send(results);
    });
});

app.post('/add_user', (req, res) => {
    const q = `INSERT INTO friends(name,age,hobby) VALUES("${req.body.name}",${req.body.age},"${req.body.hobby}")`;
    if (!req.body.name || !req.body.age || !req.body.hobby) {
        res.status(400).send({code: 400,message:'Please fill all fields'});
    }
    else {
        connection.query(q, (error, results) => {
            res.status(201).send({code: 201,message:'Friend was added'});
        });
    }
});

app.put('/update_user', (req, res) => {
    const q = `UPDATE friends SET name = "${req.body.name}", age = ${req.body.age}, hobby = "${req.body.hobby}" WHERE id = ${req.body.userId}`;
    if (req.body.userId === false) {
        res.status(400).send({code: 400,message:'Choose a friend'});
    }
    else if (!req.body.name || !req.body.age || !req.body.hobby) {
        res.status(400).send({code: 400,message:'Please fill all fields'});
    }
    else {
        connection.query(q, function (error, results) {
            res.status(200).send({code: 200,message:'Data was changed'});
        });
    }
});

app.delete('/remove_user', (req, res) => {
    const q = `DELETE FROM friends WHERE id = ${req.body.userId}`;
    if (req.body.userId === false) {
        res.status(400).send({code: 400,message:'Choose a friend'});
    }
    else {
        connection.query(q, function (error, results) {
            res.status(200).send({code: 200,message:'Friend was removed'});
        });
    }
});

app.get('/admin', (req,res) => {
    res.sendFile(`${__dirname}/public/403.html`);
    res.status(403);
});

app.get('/302', (req,res) => {
    res.redirect(`http://127.0.0.1:3000`)
    res.status(302);
});

app.get('/500', (req, res) => {
    try {
        if (!req.body.name || !req.body.age) {
            fggres.status();
        }
      } 
    catch (err) {
        res.sendFile(`${__dirname}/public/500.html`);
        res.status(500);
    }
});

app.get('*', (req,res) => {
    res.sendFile(`${__dirname}/public/404.html`);
    res.status(404);
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});