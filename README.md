# Product API

## General Description

The Product API is a RESTful interface for product management, allowing create, read, update, and delete (CRUD) operations. It facilitates system integration and centralized control of product information.

## Objectives

- Centralize product management.
- Enable easy integration with other systems.
- Ensure data security and integrity.
- Provide clear and well-documented endpoints.

## Features

- Register new products.
- Retrieve products (individual and list).
- Update product information.
- Remove products.
- Filters and pagination in listings.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Docker (optional)

## Endpoints

| Method | Endpoint         | Description                |
|--------|-----------------|----------------------------|
| GET    | /products       | Lists all products         |
| GET    | /products/:id   | Details a product          |
| POST   | /products       | Creates a new product      |
| PUT    | /products/:id   | Updates a product          |
| DELETE | /products/:id   | Removes a product          |

## Request and Response Examples

### Create Product

**Request**
```http
POST /products
Content-Type: application/json

{
  "name": "Notebook",
  "description": "Ultrathin notebook",
  "price": 3500.00,
  "stock": 10
}
```

**Response**
```json
{
  "id": "60f7c2b5e1b1a2b3c4d5e6f7",
  "name": "Notebook",
  "description": "Ultrathin notebook",
  "price": 3500.00,
  "stock": 10,
  "createdAt": "2024-06-01T12:00:00Z"
}
```

### List Products

**Request**
```http
GET /products
```

**Response**
```json
[
  {
    "id": "60f7c2b5e1b1a2b3c4d5e6f7",
    "name": "Notebook",
    "description": "Ultrathin notebook",
    "price": 3500.00,
    "stock": 10
  }
]
```

### Update Product

**Request**
```http
PUT /products/60f7c2b5e1b1a2b3c4d5e6f7
Content-Type: application/json

{
  "price": 3400.00,
  "stock": 8
}
```

**Response**
```json
{
  "id": "60f7c2b5e1b1a2b3c4d5e6f7",
  "name": "Notebook",
  "description": "Ultrathin notebook",
  "price": 3400.00,
  "stock": 8
}
```

### Remove Product

**Request**
```http
DELETE /products/60f7c2b5e1b1a2b3c4d5e6f7
```

**Response**
```json
{
  "message": "Product successfully removed."
}
```

---

> For authentication and additional details, see the full API documentation.
 Product API