class ProductController {
    constructor(productModel) {
        this.productModel = productModel; // Initialize with the product model
    }

    // Method to create a new product
    async createProduct(req, res) {
        try {
            const productData = req.body; // Get product data from request body
            const newProduct = await this.productModel.create(productData); // Create product using model
            res.status(201).json(newProduct); // Respond with the created product
        } catch (error) {
            res.status(500).json({ message: 'Error creating product', error }); // Handle errors
        }
    }

    // Method to get all products
    async getProducts(req, res) {
        try {
            const products = await this.productModel.getAll(); // Retrieve all products
            res.status(200).json(products); // Respond with the list of products
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error }); // Handle errors
        }
    }

    // Method to get a product by ID
    async getProductById(req, res) {
        try {
            const productId = req.params.id; // Get product ID from request parameters
            const product = await this.productModel.getById(productId); // Retrieve product by ID
            if (!product) {
                return res.status(404).json({ message: 'Product not found' }); // Handle not found
            }
            res.status(200).json(product); // Respond with the product
        } catch (error) {
            res.status(500).json({ message: 'Error fetching product', error }); // Handle errors
        }
    }

    // Method to update a product
    async updateProduct(req, res) {
        try {
            const productId = req.params.id; // Get product ID from request parameters
            const updatedData = req.body; // Get updated data from request body
            const updatedProduct = await this.productModel.update(productId, updatedData); // Update product
            if (!updatedProduct) {
                return res.status(404).json({ message: 'Product not found' }); // Handle not found
            }
            res.status(200).json(updatedProduct); // Respond with the updated product
        } catch (error) {
            res.status(500).json({ message: 'Error updating product', error }); // Handle errors
        }
    }

    // Method to delete a product
    async deleteProduct(req, res) {
        try {
            const productId = req.params.id; // Get product ID from request parameters
            const deletedProduct = await this.productModel.delete(productId); // Delete product
            if (!deletedProduct) {
                return res.status(404).json({ message: 'Product not found' }); // Handle not found
            }
            res.status(204).send(); // Respond with no content on successful deletion
        } catch (error) {
            res.status(500).json({ message: 'Error deleting product', error }); // Handle errors
        }
    }
}

module.exports = ProductController; // Export the ProductController class for use in routes