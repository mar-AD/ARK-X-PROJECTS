const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const csurf = require('csurf');
const { body, validationResult } = require('express-validator');
const path = require('path');
const bodyParser = require('body-parser')
const  crypto = require('crypto');
const jwt = require('jsonwebtoken');
const xss = require('xss-clean') // this to prevent someone to enter scripts liks html in the user input
// const mongoSanitize = ('express-mongo-sanitize') // this to prevent sql and nosql injuctions // we need to connect ith monodb first
const app = express();
const secretKey = crypto.randomBytes(32).toString('hex');
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: secretKey, resave: false, saveUninitialized: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(csurf({ cookie: true }));
app.use(express.json());
app.use(xss());
// app.use(mongoSanitize())
const users = [
  { id: 1, username: 'user1', password: 'password1', role: 'user' },
  { id: 2, username: 'admin', password: 'admin123', role: 'admin' },
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { csrfToken: req.csrfToken() });
});

app.post('/login',
[
  body('username').notEmpty().trim().escape(),
  body('password').isLength({min: 6})
], (req, res) => {
  // Validate and authenticate the user
  // Implement appropriate validation and secure authentication mechanisms here
  // For simplicity, you can use a hardcoded username and password for demonstration purposes
  const err = validationResult(req)
  if (!err.isEmpty()) {
    res.redirect('/');
  }
  const { username, password } = req.body;
  
  //generate JWT for the users username and passwared
  // jwt.sign({ username, password }, secretKey);
  const user = users.find((u)=> u.username === username && u.password === password)
  if (username === user.username && password === user.password) {
    req.session.isAuthenticated = true;
    res.redirect('/dashboard');
    // res.json({ token });
  } else {
    res.redirect('/');
  }
});



app.get('/login', (req, res) => {
  const token = req.headers.authorization; // JWT sent by the client

  // Verify and decode the JWT
  jwt.verify(token, secretKey, (err, { username, password }) => {
    if (err) {
      return res.status(403).json({ message: 'Access denied' });
    }

    // User is authenticated; you can access user data here
    console.log({ username, password });
  });
});



app.get('/dashboard', (req, res) => {
  // Secure the dashboard route to only allow authenticated users
  if (req.session.isAuthenticated) {
    res.render('dashboard');
  } else {
    res.redirect('/');
  }
});
 
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
