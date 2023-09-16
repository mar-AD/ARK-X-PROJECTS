const express = require('express');
const app = express()
const port = 5000
app.use(express.json())
const item = require('./routers/routre');
app.use('/stuff', item);

const phone = require('./routers/routre22')
app.use('/phone', phone)



let products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 24.99 },
    { id: 3, name: 'Product 3', price: 14.49 },
    { id: 4, name: 'Product 4', price: 7.99 },
    { id: 5, name: 'Product 5', price: 19.95 },
    { id: 6, name: 'Product 6', price: 12.75 },
    { id: 7, name: 'Product 7', price: 29.99 },
    { id: 8, name: 'Product 8', price: 9.49 },
    { id: 9, name: 'Product 9', price: 5.99 },
    { id: 10, name: 'Product 10', price: 21.99 }
];

exports.products = products

let phones = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Ma vic Air 2', price: 799.99 },
];
exports.ikhan = phones


app.listen (port, ()=>{
    console.log(`runing on ${port}`)
})


