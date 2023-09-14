const express = require('express');
const app = express();
const PORT = 4040;
app.use(express.json())


let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];


// my first middlware
app.use((req, res, next) => {
    const date = new Date();
    const currentDate = date.toISOString().split("T")[0];
    products.forEach((item) => {
        const timeObj={
        time: currentDate,
        "req method": req.method,
        "req url" : req.url
        }
        item.info = timeObj
    })
    
    // console.log(`at this date ${currentDate} these are the req methouds and the url ${req.method} ${req.url}`);
    next();
})


function errorHandler(error, req, res, next) {
    // console.log(error)
    // console.log(error.status)
    if (error.status === 404) {
        res.status(404).json({ error: 'product not found '});
    } else if (error.status === 400) {
        res.status(400).json({ error: 'you must have a problem with your new product' });    
    } else {
        res.status(500).json({ error:'Something went wrong'});
    }

}





// show the array products
app.get('/mystore',  (req, res)=>{
    res.json(products);
})


// show the array products by ID
app.get('/mystore/:id',  (req, res, next)=>{
    const byId = parseInt(req.params.id);
    const productId = products.find(item => item.id === byId);
    if (productId) {
        res.json(productId);
    }else{
        return next({status: 404});
    };
})


//add prduct to the array 
app.post('/mystore',  (req, res, next) =>{
    const {name, price} = req.body;
    if (name && typeof price =='number' && price >= 0) {
        const newproduct = {
            id: products.length+1,
            name,
            price
        }
        products.push(newproduct);
        res.json(newproduct)
    }else{
        return next({status :400});
    }
})


//my first error handling middleware
app.use(errorHandler)


app.listen(PORT, ()=>{
    console.log(`my server is runnung on ${PORT}`)
})
    
