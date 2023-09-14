const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const layouts = require('express-ejs-layouts');

app.use(layouts);
app.use(express.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));

// Serve CSS files from the 'public/css' directory
app.use('/css', express.static(path.join(__dirname, '/css')));

// Set the 'views' directory
app.set('views', path.join(__dirname, 'views'));

// i did this because i have changed the path and name of the layout.ejs file
app.set('layout', 'layout/something');

// Example routes that render EJS templates
app.get('/', (req, res) => {
    res.render('main', { pageTitle: 'Main Page' });
    
});

app.get('/about', (req, res) => {
    res.render('about', {pageTitle: 'about Page', layout: './layout/sidebar'});// i used thid to take me to the specific folfer that i want 'sidebar.ejs'

});

app.listen(port, () => {
    console.log(`Our server is listening on port ${port}`);
});
