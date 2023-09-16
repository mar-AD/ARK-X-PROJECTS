const express = require('express')
const app = express()
const port = 5050
const path = require('path')
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const xss = require('xss')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
//define ejs template
app.set('view engine', 'ejs')
//get ejs file path
app.set('views', path.join(__dirname, './templateDir'))
//grt css and imgs if needed
app.use(express.static('public'));

const city = [
    'agadir','tokiyo', 'rabat', 'massa', 'new yourk', 'paris', 'istanbul' 
]

app.get('/login', (req, res) => {
    const data = {
        title: 'Express.js with EJS',
        message: 'LOGIN FORM',
    };
    res.render('ejs', data);
});

const array = [];

app.post('/login',[
    body('name').notEmpty().trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
],(req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).render('errore');
}
const { name, email, password } = req.body;
    let id= array.length+1
    let time = new Date()
    let currentTime = time.toISOString().split("T")[0];
    let local = Math.floor(Math.random()*city.length);
    let locals = city[local]
        infos= {
            name: xss(name),
            email: xss(email),
            password: xss(password),
            date: currentTime,
            localisation: locals
        }
        array.push(infos)
        res.redirect('/login/user')  
})

app.get('/login/user', (req, res) => {
    res.render('user', { infos: infos  });
})


app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})
