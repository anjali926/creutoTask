import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "../models/bookModel.js";
import connectDB from "../database/db.js";

dotenv.config();
 const booksData = [
  {
    name: "Clean Code",
    description:
      "A handbook of agile software craftsmanship focusing on writing readable and maintainable code.",
    author: "Robert C. Martin",
    publishDate: "2008-08-01",
  },
  {
    name: "The Pragmatic Programmer",
    description:
      "Classic book that covers practical software development techniques and career advice.",
    author: "Andrew Hunt",
    publishDate: "1999-10-20",
  },
  {
    name: "Design Patterns",
    description: "Explains reusable object-oriented software design patterns.",
    author: "Erich Gamma",
    publishDate: "1994-10-31",
  },
  {
    name: "You Don't Know JS",
    description:
      "Deep dive into JavaScript core concepts including scope, closures, and async behavior.",
    author: "Kyle Simpson",
    publishDate: "2015-12-27",
  },
  {
    name: "JavaScript: The Good Parts",
    description:
      "Highlights the elegant and powerful features of JavaScript language.",
    author: "Douglas Crockford",
    publishDate: "2008-05-15",
  },
  {
    name: "Refactoring",
    description:
      "Improving the design of existing code without changing its behavior.",
    author: "Martin Fowler",
    publishDate: "1999-07-08",
  },
  {
    name: "Introduction to Algorithms",
    description:
      "Comprehensive textbook covering a wide range of algorithms and data structures.",
    author: "Thomas H. Cormen",
    publishDate: "2009-07-31",
  },
  {
    name: "System Design Interview",
    description:
      "Guide to designing scalable systems and cracking system design interviews.",
    author: "Alex Xu",
    publishDate: "2020-06-15",
  },
  {
    name: "Node.js Design Patterns",
    description:
      "Best practices and patterns for building scalable Node.js applications.",
    author: "Mario Casciaro",
    publishDate: "2016-07-18",
  },
  {
    name: "MongoDB in Action",
    description: "Practical guide to building applications using MongoDB.",
    author: "Kyle Banker",
    publishDate: "2011-01-01",
  },
  {
    name: "Eloquent JavaScript",
    description: "Modern introduction to programming using JavaScript.",
    author: "Marijn Haverbeke",
    publishDate: "2018-12-04",
  },
  {
    name: "Effective JavaScript",
    description:
      "68 specific ways to harness the power of JavaScript effectively.",
    author: "David Herman",
    publishDate: "2012-12-27",
  },
  {
    name: "Learning React",
    description:
      "Hands-on guide to building web applications using React and modern JavaScript.",
    author: "Alex Banks",
    publishDate: "2020-05-01",
  },
  {
    name: "Fullstack Node.js",
    description:
      "Covers backend development using Node.js, Express, and MongoDB.",
    author: "David Choi",
    publishDate: "2019-03-10",
  },
  {
    name: "Web Scalability for Startup Engineers",
    description: "Practical advice on scaling web applications efficiently.",
    author: "Artur Ejsmont",
    publishDate: "2015-06-02",
  },
];

const seedBooks = async () => {
  try {
    await connectDB();

    // Optional: clear old data
    await Book.deleteMany();

    // Insert new data
    await Book.insertMany(booksData);

    console.log(" Books seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding books:", error);
    process.exit(1);
  }
};

seedBooks();
