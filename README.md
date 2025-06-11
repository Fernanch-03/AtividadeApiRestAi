# Product API

This is a RESTful API for managing products. It allows users to create, read, update, and delete product information. The API is built using Node.js and Express.

## Features

- Create a new product
- Retrieve a list of products
- Retrieve a specific product by ID
- Update product information
- Delete a product

## Project Structure

```
product-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains the product controller
│   │   └── productController.js
│   ├── routes                # Defines the API routes
│   │   └── productRoutes.js
│   ├── models                # Contains the product model
│   │   └── product.js
│   ├── middlewares           # Contains validation middleware
│   │   └── validation.js
│   └── utils                 # Utility functions
│       └── index.js
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd product-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run the following command:
```
npm start
```

The server will run on `http://localhost:3000`.

## API Endpoints

### Create a Product

- **POST** `/api/products`
- Request Body:
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 100,
    "stock": 50
  }
  ```

### Get All Products

- **GET** `/api/products`

### Get a Product by ID

- **GET** `/api/products/:id`

### Update a Product

- **PUT** `/api/products/:id`
- Request Body:
  ```json
  {
    "name": "Updated Product Name",
    "description": "Updated Description",
    "price": 150,
    "stock": 30
  }
  ```

### Delete a Product

- **DELETE** `/api/products/:id`

## Validation

The API includes input validation for creating and updating products to ensure that all required fields are present and correctly formatted.

## License

This project is licensed under the MIT License.