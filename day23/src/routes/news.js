const express = require('express')
const newsRouter = express.Router()
// const fetch = require('node-fetch')



newsRouter.get('/', async(req, res) => {
    
    try {
        const fetch = await import('node-fetch'); // Use dynamic import
        const response = await fetch.default(`https://newsapi.org/v2/everything?q=tesla&from=2023-13-08&sortBy=publishedAt&apiKey=cadc91a30c1b4bc6a23d241b7da7ed7c`);
        const data = await response.json();
        res.render('news', {articels: data.articles})
        
        
        // res.json(data.articles); 
    } catch (error) {
        if (error.response) {
            res.render('news', {articels: null})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            
        }else if (error.req){
            res.render('news', {articels: null})
            console.log(error.req)
        }else{
            res.render('news', {articels: null})
            console.error(res.status(404).send('Error', error.message))
        }
    }

})


newsRouter.post('/', async(req, res) => {
    let inputVal = req.body.search
    try {
        const fetch = await import('node-fetch'); // Use dynamic import
        const response = await fetch.default(`https://newsapi.org/v2/everything?q=tesla&from=${inputVal}&sortBy=publishedAt&apiKey=cadc91a30c1b4bc6a23d241b7da7ed7c`);
        const data = await response.json();
        res.render('news', { inputVal: data.articles.publishedAt });
        data.articles.forEach(article => {
            console.log(article.publishedAt.split("T")[0]);
          });
        
        
    } catch (error) {
        if (error.response) {
            res.render('news', {articel: null})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            
        }else if (error.req){
            res.render('news', {articel: null})
            console.log(error.req)
        }else{
            res.render('news', {articel: null})
            console.error(res.status(404).send('Error', error.message))
        }
    }

})


module.exports = newsRouter