class Product {
    constructor(id, name, description, price, stock) {
        this.id = id; // Unique identifier for the product
        this.name = name; // Name of the product
        this.description = description; // Description of the product
        this.price = price; // Price of the product
        this.stock = stock; // Available stock for the product
    }

    // Method to update product details
    updateDetails(name, description, price, stock) {
        if (name) this.name = name;
        if (description) this.description = description;
        if (price) this.price = price;
        if (stock) this.stock = stock;
    }
}

// Exporting the Product class for use in other modules
module.exports = Product;