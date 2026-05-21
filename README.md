# MongoDB Aggregation Pipeline REST API

## About

Simple backend REST API built to practice and demonstrate MongoDB aggregation pipelines using a real-world backend architecture.

---

## Features

- RESTful API architecture
- MongoDB + Mongoose integration
- Aggregation pipeline examples
- Filtering, grouping, and sorting data
- Statistical aggregation operations
- Modular backend structure
- Environment variable support
- Sample/mock data seeding

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript (ESM Modules)

---

## Project Structure

```bash
project-root/
│
├── config/          # Database connection setup
├── controllers/     # Route/controller logic
├── models/          # Mongoose schemas/models
├── routes/          # API routes
├── services/        # Mock data/services
├── middleware/      # Custom middleware
├── utils/           # Helper functions
├── .env             # Environment variables
├── server.js        # Application entry point
└── package.json
```

---

## Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project directory

```bash
cd <project-name>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 5. Run the development server

```bash
npm run dev
```

---

## Example API Endpoints

### Get All Users

```http
GET /api/users
```

### Seed Sample Data

```http
POST /api/users/seed
```

### Aggregation Pipeline Statistics

```http
GET /api/users/stats
```

---

## Example Aggregation Pipeline

```js
const stats = await User.aggregate([
  {
    $match: { isActive: true }
  },
  {
    $group: {
      _id: "$profession",
      averageAge: { $avg: "$age" },
      totalUsers: { $sum: 1 }
    }
  },
  {
    $sort: { totalUsers: -1 }
  }
]);
```

---

## Aggregation Operators Used

- `$match`
- `$group`
- `$sort`
- `$project`
- `$avg`
- `$sum`
- `$count`

---

## Purpose of the Project

This project was built to improve understanding of:

- MongoDB aggregation pipelines
- Backend API development
- Data analytics processing
- REST API architecture
- Mongoose query operations

---

## Future Improvements

- JWT Authentication
- Pagination
- Advanced analytics endpoints
- Swagger API documentation
- Docker support
- Cloud deployment

---

## Author

Built by RayTheDev
