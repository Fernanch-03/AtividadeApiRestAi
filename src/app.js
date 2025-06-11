const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000; // You can change this port if needed

app.use(express.json()); // Middleware to parse JSON bodies

// Register product routes
app.use('/products', productRoutes);

// Root endpoint for testing
app.get('/', (req, res) => {
  res.send('Product API is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});