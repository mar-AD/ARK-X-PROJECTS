const express = require('express')
const router = express.Router()





const product = require('../index.js')
// console.log(product)



router.get('/', (req, res)=>{
    res.json(product.products)
})

router.get('/:id', (req, res)=>{
    const productid = parseInt(req.params.id)
    const getid = product.products.find(item => item.id === productid);
    if (getid  ) {
        res.json(getid)
    }else{
        res.status(400).json({ERROR:' product not foundhbhbh'})
    }
})

router.post('/', (req, res)=>{
    const {name, price} = req.body;
    console.log({name, price})
    if (name && typeof price =='number' && price >= 0) {
        const newproduct = {
            id: product.length+1,
            name,
            price
        }
        product.products.push(newproduct);
        res.json(newproduct)
    }else{
        res.status(404).json({ERROR:' product not found'})
    }
})


module.exports = router