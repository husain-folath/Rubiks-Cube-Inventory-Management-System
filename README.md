# 🧊 Rubik's Cube Inventory Management System

An inventory management web application for tracking Rubik's Cube products, stock levels, suppliers, and customer orders.

---

## 🚀 Features

- 🛍️ Product catalog with images and details
- 📑 Order creation and management
- 🧾 Supplier management and product assignment
- 🔒 User authentication 

---

## 🧱 Models

### 🧊 Product
- `name` (String) — Name of the cube (e.g., "3x3 Speed Cube")
- `description` (String) — Product details
- `price` (Number) — Retail price
- `stock` (Number) — Units in inventory
- `imageUrl` (String) — Image path or URL
- `supplier` (ObjectId) — Linked Supplier

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
│   │   └── routeController.js    # Routing
│   ├── orders/
│   │   ├── dataController.js     # Order placing, status updates
│   │   ├── viewController.js
│   │   └── routeController.js
│   ├── suppliers/
│   │   ├── dataController.js
│   │   ├── viewController.js
│   │   └── routeController.js
│   └── users/
│       ├── dataController.js     # Register, login, profile logic
│       ├── viewController.js     # Login/register forms and user pages
│       └── routeController.js    # User web and API routing
├── views/
│   ├─── products/                 # Product listing & detail pages
│   │    ├── Index.jsx 
│   │    ├── New.jsx 
│   │    ├── Edit.jsx
│   │    └── Show.jsx
│   ├── orders/                   # Orders dashboard
│   │    ├── Index.jsx 
│   │    ├── New.jsx 
│   │    ├── Edit.jsx
│   │    └── Show.jsx
│   ├── suppliers/                # Supplier details
│   │    ├── Index.jsx 
│   │    ├── New.jsx 
│   │    ├── Edit.jsx
│   │    └── Show.jsx
│   ├── users/                    # Register, login, profile pages
│   │    ├── SignIn.jsx 
│   │    └── SignUp.jsx 
│   └── layouts/                  # Shared UI layouts
│        └── Layout.jsx 
└── public/                       # Static files (images, CSS, etc.)
    ├── mainStyle.css 
    └── background-image.png
```

---

## 🛠️ Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JSX / EJS / React (for views)
- Jest (for testing)
- JWT (optional for user auth)

---

## 🌐 Web Routes

| Method | Endpoint                  | Description               | Auth Required   |
|--------|---------------------------|---------------------------|-----------------|
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
| GET    | `/users/signin`           | Login form                | ❌ No           |
| POST   | `/users/signin`           | Login user                | ❌ No           |
| GET    | `/users/signup`           | Registration form         | ❌ No           |
| POST   | `/users/signup`           | Create new user           | ❌ No           |

---

## 📦 Deployment & Usage

1. Clone the repo  
2. Run `npm install`  
3. Create a `.env` with your DB and secret key  
4. Run `npm start` to begin local dev  
5. Seed database (optional script)  
6. Navigate to `localhost:PORT` to begin

---

## 🔐 Optional Enhancements

- Role-based admin panel  
- REST API endpoint support  
- Responsive UI with React  
- Product filtering, sorting & search  
- Cart/checkout integration

---
## 📸 Screenshots


### 🧊 Product Index
![Product Catalog](/public/products-index.png)

### 🚚 Supplier Index
![Supplier View](/public/suppliers-index.png)

### 🛒 Order Index
![Order Dashboard](/public/orders-index.png)

### 👤 User 
![Login](/public/signin-page.png)
![signup](/public/signup-page.png)