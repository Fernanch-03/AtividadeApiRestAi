const express = require('express');
const ProductController = require('../controllers/productController');
const Product = require('../models/product');
const { validateCreateProduct, validateUpdateProduct } = require('../middlewares/validation');
const { generateUniqueId, formatPrice } = require('../utils/index');

const router = express.Router();

// In-memory storage for products
const products = [];

// Product model implementation
const productModel = {
    create: async (data) => {
        const id = generateUniqueId();
        const product = new Product(
            id,
            data.name,
            data.description,
            formatPrice(data.price),
            data.stock
        );
        products.push(product);
        return product;
    },
    getAll: async () => products,
    getById: async (id) => products.find(p => p.id === id),
    update: async (id, data) => {
        const product = products.find(p => p.id === id);
        if (!product) return null;
        if (data.name) product.name = data.name;
        if (data.description) product.description = data.description;
        if (data.price) product.price = formatPrice(data.price);
        if (data.stock !== undefined) product.stock = data.stock;
        return product;
    },
    delete: async (id) => {
        const index = products.findIndex(p => p.id === id);
        if (index === -1) return null;
        const deleted = products.splice(index, 1);
        return deleted[0];
    }
};

// Pass the model to the controller
const productController = new ProductController(productModel);

// Route definitions
router.post('/', validateCreateProduct, productController.createProduct.bind(productController));
router.get('/', productController.getProducts.bind(productController));
router.get('/:id', productController.getProductById.bind(productController));
router.put('/:id', validateUpdateProduct, productController.updateProduct.bind(productController));
router.delete('/:id', productController.deleteProduct.bind(productController));

module.exports = router;