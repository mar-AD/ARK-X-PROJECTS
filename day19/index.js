const express = require ('express');
const app = express();
const port = process.env.PORT || 4000;
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());

const products = require('./routes/products')
app.use('/products', products)


app.listen(port, ()=>{
    console.log(`our server is listening on port ${port}`)
})





