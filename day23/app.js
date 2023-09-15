const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 4000;

//for static files...reaching all files that we need by a shortcut
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use(bodyParser.urlencoded({ extended : true }))
// templat engin EJS
app.set('views', './src/views')
app.set('view engine', 'ejs')

// routes
const newsRouter = require('./src/routes/news');
app.use('/', newsRouter); 
app.use('/articel', newsRouter);

//listen on our PORT
app.listen(PORT, () => console.log(`our server is running on ${PORT}`))