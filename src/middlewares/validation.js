// validation.js
// This file contains middleware functions for validating incoming requests for product creation and updating.

const { body, validationResult } = require('express-validator');

// Middleware to validate product creation
const validateCreateProduct = [
    body('name').isString().notEmpty().withMessage('Name is required and must be a string.'),
    body('description').isString().optional().withMessage('Description must be a string.'),
    body('price').isFloat({ gt: 0 }).withMessage('Price is required and must be a positive number.'),
    body('stock').isInt({ gt: -1 }).withMessage('Stock is required and must be a non-negative integer.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Middleware to validate product updates
const validateUpdateProduct = [
    body('name').isString().optional().withMessage('Name must be a string.'),
    body('description').isString().optional().withMessage('Description must be a string.'),
    body('price').isFloat({ gt: 0 }).optional().withMessage('Price must be a positive number.'),
    body('stock').isInt({ gt: -1 }).optional().withMessage('Stock must be a non-negative integer.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Exporting the validation middleware functions
module.exports = {
    validateCreateProduct,
    validateUpdateProduct
};