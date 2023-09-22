const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser'); // Add cookie-parser middleware
// const csurf = require('csrf');
const { body, validationResult, Result } = require('express-validator');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const xss = require('xss');
const bcrypt = require('bcrypt')
const app = express();
const fs = require('fs');


const secretKey = '1c81da0609e0cbc608e98cd0c36d63d4a24483f4a583bb17cf8710a3aa8c6045';

app.use(session({ secret: secretKey, resave: false, saveUninitialized: false }));
app.use(cookieParser()); // Use cookie-parser middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Routes
app.get('/regester', (req, res) => {
  res.render('regester');
});




const users = require('./data/usersInfos.json');
  app.post('/regester',
[
  body('username').notEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').isNumeric().trim(),
  body('password').isLength({ min: 6 })
],
 (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    res.redirect('/');
  }
  const { username, email, phone, password } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.error(err);
    } else {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          console.error(err);
        } else {
          const securedData= {
          username: xss(username),
          email: xss(email),
          phone:xss(phone),
          password: xss(hash)
          }
        users.push(securedData)
        
        fs.writeFile('./data/usersInfos.json', JSON.stringify(users, null, 2), (err) =>{
            if(err){
              throw err
            }
        });
        }
      });
    }
    res.redirect('/login');
  });

});
app.get('/login', (req, res)=>{
  res.render('index')
})

app.post('/login', (req, res)=>{
  const { username, password } = req.body;
  // console.log(username)
  fs.readFile('./data/usersInfos.json', 'utf8', (err, data)=>{
    if(err){
      throw err
    }
      const users = JSON.parse(data);
      const user = users.find((u) => u.username === username);
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          console.log(password)
          console.log(user.password)
          if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
          }
        
          if (result) {
            console.log(result)
            const token = jwt.sign({ userId: user.phone }, secretKey);
            res.cookie('authToken', token);
            return res.redirect('/dashboard');
          } else {
            return res.status(404).send(' password is incorrect');
          }
        });
        
      }else{
        return res.status(404).send(' username is incorrect');
      } 
  });
})

// app.get('/dashboard', (req, res)=>{
//   res.render('dashboard')
// })

app.get('/dashboard', (req, res) => {
  // Check if the user is authenticated here using the JWT
  const token = req.cookies.authToken;
  
  if (!token) {
    return res.redirect('/login');
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.redirect('/login');
    }

    // Here, you can render the dashboard for authenticated users
    res.render('dashboard');
  });
});




// Logout route
app.get('/logout', (req, res) => {
  // Clear the 'authToken' cookie
  res.clearCookie('authToken');
  res.redirect('/login');
});

// 




// app.get('/dashboard', (req, res) => {
//   // Secure the dashboard route to only allow authenticated users
//   if (req.session.isAuthenticated) {
//     res.render('dashboard');
//   } else {
//     res.redirect('/');
//   }
// });
app.listen(3000, () => {
  console.log('Server started on port 3000');
});





























// app.get('/', (req, res) => {
//   res.render('index', { csrfToken: 'req.csrfToken()' });
// });

// app.post('/login',
// [
//   body('username').notEmpty().trim().escape(),
//   body('password').isLength({min: 6})
// ], (req, res) => {
//   // Validate and authenticate the user
//   // Implement appropriate validation and secure authentication mechanisms here
//   // For simplicity, you can use a hardcoded username and password for demonstration purposes
//   const err = validationResult(req)
//   if (!err.isEmpty()) {
//     res.redirect('/');
//   }
//   const { username, password } = req.body;
  
//   //generate JWT for the users username and passwared
//   const user = users.find((u)=> u.username === username && u.password === password)
//   if (user) {
//     const token = jwt.sign({ userId: user.id, userRole: user.role }, secretKey);
  
//     // Store the token in the user's session
//     req.session.jwtToken = token;
  
//     req.session.isAuthenticated = true;
//     res.redirect('/dashboard');
//   } else {
//     res.status(404).send({ error: 'the password or username are uncorrect' });
//   }
// });



// app.get('/dashboard', (req, res) => {
//   // Check if there's a JWT token in the user's session
//   const jwtToken = req.session.jwtToken;

//   // Verify and decode the JWT token
//   if (!jwtToken) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   jwt.verify(jwtToken, secretKey, (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ message: 'Access denied' });
//     }

//     // Check if the user has the 'admin' role
//     if (decoded.userRole === 'admin') {
//       // User is authenticated as an admin; you can access user data here via `decoded`
//       const { userId, username } = decoded;
//       // console.log({ userId, username });
//       res.render('dashboard');
//     } else {
//       // User does not have the 'admin' role, deny access
//       return res.status(403).send({ error: 'You are not allowed to access this page; it is only for admins' })
//     }
//   })
// });
// Logout route
// app.get('/logout', (req, res) => {
//   // destroy the user's sesson 
//   req.session.destroy();
//   res.redirect('/');
// });



// // app.get('/dashboard', (req, res) => {
// //   // Secure the dashboard route to only allow authenticated users
// //   if (req.session.isAuthenticated) {
// //     res.render('dashboard');
// //   } else {
// //     res.redirect('/');
// //   }
// // });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });