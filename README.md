# 🧊 Rubik's Cube Inventory Management System

An inventory management web application for tracking Rubik's Cube products, stock levels, suppliers, and customer orders.

---

## 🚀 Features

- 🛍️ Product catalog with images and details
- 📦 Stock level tracking with low-stock alerts
- 📑 Order creation and management
- 🧾 Supplier management and product assignment
- 🔒 User authentication (optional)

---

## 🧱 Models

### Product
- `name` (String)
- `description` (String)
- `price` (Number)
- `stock` (Number)
- `imageUrl` (String)
- `supplier` (ObjectId)
- `orders` (Array of ObjectId)

### Supplier
- `name` (String)
- `contact` (String)
- `email` (String)
- `products` (Array of ObjectId)

### Order
- `items` (Array of { product, quantity })
- `total` (Number)
- `status` (String: `Processing`, `Shipped`, `Delivered`)
- `date` (Date)
- `customer` (Optional ObjectId)

---

## 📁 Folder Structure
```php
rubiks-inventory/
├── app.js                    # Express app config
├── server.js                 # Server entry
├── models/
│   ├── product.js            # Rubik's Cube model
│   ├── supplier.js           # Supplier model
│   └── order.js              # Order model
├── controllers/
│   ├── products/
│   │   ├── dataController.js     # Business logic (stock, details)
│   │   ├── viewController.js     # Views (catalog, single view)
│   │   ├── apiController.js      # API format
│   │   └── routeController.js    # Routing
│   ├── orders/
│   │   ├── dataController.js     # Order placing, status updates
│   │   ├── viewController.js
│   │   ├── apiController.js
│   │   └── routeController.js
│   └── suppliers/
│       ├── dataController.js
│       ├── viewController.js
│       ├── apiController.js
│       └── routeController.js
├── routes/
│   └── apiRoutes.js          # Router for all API endpoints
├── views/
│   └── products/             # Product listing & detail pages
│   └── orders/               # Orders dashboard
│   └── suppliers/            # Supplier details
│   └── layouts/              # Shared UI layouts
├── public/                   # Static files (images, CSS, etc.)
└── tests/                    # Unit/integration tests
```

---

## 🛠️ Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JSX / EJS / React (for views)
- Jest (for testing)
- JWT (optional for user auth)

---

## 🔐 Authentication Endpoints

| Method | Endpoint              | Description        | Auth Required |
|--------|-----------------------|--------------------|----------------|
| POST   | `/api/users`          | Create new user    | ❌ No           |
| POST   | `/api/users/login`    | Login user         | ❌ No           |
| GET    | `/api/users/profile`  | Get user profile   | ✅ Yes          |
| PUT    | `/api/users/:id`      | Update user        | ✅ Yes          |
| DELETE | `/api/users/:id`      | Delete user        | ✅ Yes          |

---

## 🧊 Product (Cube) API Endpoints

| Method | Endpoint                 | Description               | Auth Required |
|--------|--------------------------|---------------------------|----------------|
| GET    | `/api/products`          | Get all cubes             | ✅ Yes          |
| GET    | `/api/products/:id`      | Get single cube           | ✅ Yes          |
| POST   | `/api/products`          | Add new cube product      | ✅ Yes          |
| PUT    | `/api/products/:id`      | Update cube product       | ✅ Yes          |
| DELETE | `/api/products/:id`      | Delete cube product       | ✅ Yes          |

---

## 🧾 Order API Endpoints

| Method | Endpoint              | Description              | Auth Required |
|--------|-----------------------|--------------------------|----------------|
| GET    | `/api/orders`         | Get all orders           | ✅ Yes          |
| GET    | `/api/orders/:id`     | Get order details        | ✅ Yes          |
| POST   | `/api/orders`         | Create new order         | ✅ Yes          |
| PUT    | `/api/orders/:id`     | Update order status      | ✅ Yes          |
| DELETE | `/api/orders/:id`     | Cancel/delete order      | ✅ Yes          |

---

## 🚚 Supplier API Endpoints

| Method | Endpoint                | Description             | Auth Required |
|--------|-------------------------|-------------------------|----------------|
| GET    | `/api/suppliers`        | Get all suppliers       | ✅ Yes          |
| GET    | `/api/suppliers/:id`    | Get supplier details    | ✅ Yes          |
| POST   | `/api/suppliers`        | Add new supplier        | ✅ Yes          |
| PUT    | `/api/suppliers/:id`    | Update supplier info    | ✅ Yes          |
| DELETE | `/api/suppliers/:id`    | Delete supplier         | ✅ Yes          |

---

## 🌐 Web Routes

| Method | Endpoint                  | Description               | Auth Required |
|--------|---------------------------|---------------------------|----------------|
| GET    | `/products`               | Show all cube products    | ✅ Yes          |
| GET    | `/products/new`           | New cube form             | ✅ Yes          |
| POST   | `/products`               | Create new cube product   | ✅ Yes          |
| GET    | `/products/:id`           | Show single cube          | ✅ Yes          |
| GET    | `/products/:id/edit`      | Edit cube form            | ✅ Yes          |
| PUT    | `/products/:id`           | Update cube               | ✅ Yes          |
| DELETE | `/products/:id`           | Delete cube               | ✅ Yes          |
| GET    | `/orders`                 | View all orders           | ✅ Yes          |
| GET    | `/orders/:id`             | View order details        | ✅ Yes          |
| GET    | `/suppliers`              | View all suppliers        | ✅ Yes          |
| GET    | `/suppliers/new`          | New supplier form         | ✅ Yes          |
| POST   | `/suppliers`              | Create supplier           | ✅ Yes          |
| GET    | `/suppliers/:id`          | View supplier details     | ✅ Yes          |
| GET    | `/suppliers/:id/edit`     | Edit supplier             | ✅ Yes          |
| PUT    | `/suppliers/:id`          | Update supplier           | ✅ Yes          |
| DELETE | `/suppliers/:id`          | Delete supplier           | ✅ Yes          |
