router.delete(':id', (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(product => product.id === productId);

  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  // Remove the product from the array
  products.splice(index, 1);

  res.status(204).json(); // Respond with a 204 status (No Content)
});


module.exports = router;
  