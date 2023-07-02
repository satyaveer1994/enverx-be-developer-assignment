const express = require("express");
const router = express.Router();
// Import the necessary controllers
const {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
  } = require("../controllers/blogController");
  
  // Route: GET /posts - Get all blog posts
  router.get("/posts", getAllBlogs);
  
  // Route: GET /posts/:id - Get a specific blog post by ID
  router.get("/posts/:id", getBlogById);
  
  // Route: POST /posts - Create a new blog post
  router.post("/posts", createBlog);
  
  // Route: PUT /posts/:id - Update an existing blog post
  router.put("/posts/:id", updateBlog);
  
  // Route: DELETE /posts/:id - Delete a blog post
  router.delete("/posts/:id", deleteBlog);
  

module.exports = router;