require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const products = [
  { id: 1, name: 'shoe', price: 10 },
  { id: 2, name: 'bag', price: 20 },
  { id: 3, name: 'watch', price: 30 },
];

// end point for listing products
app.get('/products', (req, res) => {
  res.send(products);
})

// end point for creating a product
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})