// src/utils/index.js

// This module exports utility functions that can be used throughout the application.

// Function to generate a unique ID for products
const generateUniqueId = () => {
    return 'prod_' + Math.random().toString(36).substr(2, 9); // Generates a random string prefixed with 'prod_'
};

// Function to format the price to two decimal places
const formatPrice = (price) => {
    return parseFloat(price).toFixed(2); // Ensures the price is a string with two decimal places
};

// Exporting the utility functions
module.exports = {
    generateUniqueId,
    formatPrice
};