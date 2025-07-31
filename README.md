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

### 🧊 Product
- `name` (String) — Name of the cube (e.g., "3x3 Speed Cube")
- `description` (String) — Product details
- `price` (Number) — Retail price
- `stock` (Number) — Units in inventory
- `imageUrl` (String) — Image path or URL
- `supplier` (ObjectId) — Linked Supplier
- `orders` (Array of ObjectId) — Orders containing this product

### 🚚 Supplier
- `name` (String) — Supplier name
- `contact` (String) — Contact person
- `email` (String) — Email address
- `products` (Array of ObjectId) — Products supplied

### 🛒 Order
- `items` (Array of { product, quantity }) — Ordered items
- `total` (Number) — Total order cost
- `status` (String: `Processing`, `Shipped`, `Delivered`) — Order status
- `date` (Date) — Order date
- `customer` (Optional ObjectId) — Linked user (if registered)

### 👤 User
- `username` (String) — Unique display name
- `email` (String) — Unique email address
- `password` (String) — Hashed password
- `role` (String: `user`, `admin`) — User role
- `orders` (Array of ObjectId) — Orders placed by user
---

## 📁 Folder Structure
```
rubiks-inventory/
├── app.js                    # Express app config
├── server.js                 # Server entry
├── models/
│   ├── product.js            # Rubik's Cube model
│   ├── supplier.js           # Supplier model
│   ├── order.js              # Order model
│   └── user.js               # User model with auth logic
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
│   ├── suppliers/
│   │   ├── dataController.js
│   │   ├── viewController.js
│   │   ├── apiController.js
│   │   └── routeController.js
│   └── users/
│       ├── dataController.js     # Register, login, profile logic
│       ├── viewController.js     # Login/register forms and user pages
│       ├── apiController.js      # API response handling
│       └── routeController.js    # User web and API routing
├── routes/
│   └── apiRoutes.js              # Router for all API endpoints
├── views/
│   └── products/                 # Product listing & detail pages
│   └── orders/                   # Orders dashboard
│   └── suppliers/                # Supplier details
│   └── users/                    # Register, login, profile pages
│   └── layouts/                  # Shared UI layouts
├── public/                       # Static files (images, CSS, etc.)
└── tests/                        # Unit/integration tests
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
| GET    | `/users`                  | View all users (admin)    | ✅ Yes          |
| GET    | `/users/:id`              | View user profile         | ✅ Yes          |
| GET    | `/users/:id/edit`         | Edit user profile form    | ✅ Yes          |
| PUT    | `/users/:id`              | Update user               | ✅ Yes          |
| DELETE | `/users/:id`              | Delete user               | ✅ Yes          |
| GET    | `/login`                  | Login form                | ❌ No           |
| POST   | `/login`                  | Login user                | ❌ No           |
| GET    | `/register`               | Registration form         | ❌ No           |
| POST   | `/register`               | Create new user           | ❌ No           |

