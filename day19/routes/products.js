const express = require('express');
const router = express.Router()
 


// const products = require('../index');

let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
  ];



router.get('/', (req, res)=>{
  res.json(products);
})
//  Route Parameters:
 router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
      res.json(product);
  } else {
      res.status(404).json({ message: 'Product not found' });
  }
});

// query strings=====================================
router.get('/search', (req, res) => {
    const minPrice = parseFloat(req.query.minPrice); 
    const maxPrice = parseFloat(req.query.maxPrice); 

    // Filter products based on price range
    const filteredProducts = products.filter(item => {
        return (item.price >= minPrice) && ( item.price <= maxPrice)});
    

    if (filteredProducts.length > 0) {
        // Extract the prices from the filtered products
        const prices = filteredProducts.map(item => 
            `name: ${item.name}  price: ${item.price}`
        );

        res.json({ prices });
    } else {
        res.status(404).json({ message: 'No products match the criteria' });
    }
});


// Route to create a new product
router.post('/', (req, res) => {
    // console.log(req.body);
    const { name, price } = req.body;
    // const name = req.query.name;
    // const price = parseFloat(req.query.price);

    if (!name || typeof price !== 'number' || price <= 0) {
      return res.status(400).json({ error: 'Invalid product data' });
    }

    const newProduct = {
      id: products.length + 1, 
      name,
      price,
    };
      
  products.push(newProduct);

  res.status(201).json(newProduct);
});




// Route to update the details of a specific product by ID

router.put('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productToUpdate = products.find(p => p.id === productId);

  if (!productToUpdate) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const { name, price } = req.body;

  // Validate the updated data (you can add more validation here)
  if (!name || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Invalid product data' });
  }

  // Update the product details
  productToUpdate.name = name;
  productToUpdate.price = parseFloat(price);
  // Respond with the updated product
res.json(productToUpdate);
});






//  delete  product by ID
router.delete(':id', (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(product => product.id === productId);

  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  // Remove the product from the array
  products.splice(index, 1);

  res.status(204).send();
});


module.exports = router;
  
