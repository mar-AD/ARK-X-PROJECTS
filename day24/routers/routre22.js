const express = require('express')
const rot = express.Router()





const phone = require('../index.js')



rot.get('/', (req, res)=>{
    res.json(phone.ikhan)
})

rot.get('/:id', (req, res)=>{
    const productid = parseInt(req.params.id)
    const getid = phone.ikhan.find(item => item.id === productid);
    if (getid  ) {
        res.json(getid)
    }else{
        res.status(400).json({ERROR:' product not foundhbhbh'})
    }
})


module.exports = rot
