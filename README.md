 # 📚 creutoTask – Book Management REST API

A clean and scalable **Node.js + Express + MongoDB** REST API for managing books.  
This project provides APIs to **create books** and **fetch books with advanced filtering, sorting, and pagination**.

---

## 🚀 Features

- Create a new book (POST API)
- Fetch books with:
  - Search (name & description)
  - Author filtering
  - Publish date range filtering
  - Pagination
  - Sorting (ascending / descending)
- Case-insensitive search using MongoDB Regex
- Clean project structure
- Production-ready API response format

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Tools:** Postman (API testing)
- **Language:** JavaScript (ES Modules)

---

##  Project Structure

creutoTask/
│
├── controllers/
│ └── bookController.js
│
├── database/
│ └── db.js
│
├── models/
│ └── bookModel.js
│
├── routes/
│ └── bookRoutes.js
│
├── seed/
│ └── book.seed.js
├── .env
├── server.js
├── package.json
└── README.md


---

## ⚙️ Prerequisites

Make sure you have the following installed:

- **Node.js** (v18+ recommended)
- **MongoDB** (local or MongoDB Atlas)
- **Git**

This project uses the following npm packages:
- **express**
- **mongoose**
- **dotenv**

Check versions:
```bash
node -v
npm -v
git --version


Installation & Setup-------

1️⃣ Clone the repository

   git clone https://github.com/anjali926/creutoTask.git

2️⃣ Navigate into the project
     cd creutoTask

3️⃣ Install dependencies
    npm install

4️⃣ Create .env file
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   
5️⃣ Start the server
 npm start
  Server will run at:
  http://localhost:8000

 ---

## 🌱 Database Seed (Sample Data)

This project includes a **seed script** to populate the database with **15+ sample books**.  
Seeding helps in quickly testing the **GET /api/books** endpoint with search, filters, pagination, and sorting.

--

📌 API Endpoints
   Create Book

POST /api/book/create-book
Request Body (JSON)
{
  "name": "Clean Code",
  "description": "A handbook of agile software craftsmanship",
  "author": "Robert C. Martin",
  "publishDate": "2008-08-01"
}

Response
{
  "message": "Book created successfully",
  "book": {
    "_id": "65fabc...",
    "name": "Clean Code",
    "author": "Robert C. Martin"
  }
}



📖 Get Books
GET /api/book/get-book
| Parameter | Description                         |
| --------- | ----------------------------------- |
| `search`  | Search in name & description        |
| `author`  | Filter by author (case-insensitive) |
| `from`    | Publish date start                  |
| `to`      | Publish date end                    |
| `page`    | Page number (default: 1)            |
| `limit`   | Results per page (default: 10)      |
| `sortBy`  | Field to sort (name, publishDate)   |
| `order`   | asc / desc                          |

Example Request

GET /api/books?search=js&author=Kyle
Response-----
{
  "page": 1,
  "limit": 5,
  "total": 2,
  "results": [
    {
      "_id": "65fa...",
      "name": "You Don't Know JS",
      "author": "Kyle Simpson",
      "publishDate": "2016-12-27"
    }
  ]
}



🧪 Testing with Postman

1.Open Postman

2.Select GET or POST

3.Enter API URL
  http://localhost:8000/api/book
  
For POST:

1.Go to Body → raw → JSON

2.Paste request body

 Click Send
  


 👩‍💻 Author

Anjali Srivastava
GitHub: https://github.com/anjali926