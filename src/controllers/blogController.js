const blogModel = require("../models/blogModel");

const createBlog = async function (req, res) {
  try {
    const data = req.body;

    if (Object.keys(data).length === 0) {
      return res
        .status(400)
        .send({
          status: false,
          msg: "Bad request. Content to post is missing",
        });
    }

    const { title, content, category } = data;

    if (!title) {
      return res
        .status(400)
        .send({ status: false, msg: "Title is a required field" });
    }

    if (!content) {
      return res
        .status(400)
        .send({ status: false, msg: "Content is a required field" });
    }

    if (!category) {
      return res
        .status(400)
        .send({ status: false, msg: "Category is a required field" });
    }

    const savedData = await blogModel.create(data);

    return res.status(201).send({ status: true, data: savedData });
  } catch (error) {
    console.error("An error occurred:", error);
    return res
      .status(500)
      .send({ status: false, msg: "Server Error", error: error.message });
  }
};

const getAllBlogs = async function (req, res) {
  try {
    const { sortBy, category } = req.query;

    const query = {
      isDeleted: false,
      isPublished: true,
    };

    if (category) {
      query.category = category;
    }

    let sortOptions = {};

    if (sortBy) {
      if (sortBy === "createdDate") {
        sortOptions.createdAt = -1; // Sort by created date in descending order
      } else if (sortBy === "blogName") {
        sortOptions.title = 1; // Sort by blog name in ascending order
      }
    } else {
      // Default sorting if sortBy is not provided
      sortOptions.createdAt = -1; // Sort by created date in descending order
    }

    const blogs = await blogModel.find(query).sort(sortOptions).exec();

    if (blogs.length === 0) {
      return res
        .status(404)
        .send({ status: false, msg: "No blogs available." });
    }

    return res
      .status(200)
      .send({ status: true, count: blogs.length, data: blogs });
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;

    // Validate if the ID is provided
    if (!blogId) {
      return res
        .status(400)
        .json({ status: false, msg: "Blog ID is required" });
    }

    // Retrieve the blog post by ID
    const blog = await blogModel.findById(blogId);

    // Check if the blog post exists
    if (!blog) {
      return res
        .status(404)
        .json({ status: false, msg: "Blog post not found" });
    }

    // Return the blog post data
    return res.status(200).json({ status: true, data: blog });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, msg: "Server error", error: error.message });
  }
};

const updateBlog = async function (req, res) {
  try {
    const blogId = req.params.id;
    if (!blogId) {
      return res
        .status(400)
        .send({ status: false, msg: "Blog Id is required" });
    }

    const blog = await blogModel.findById(blogId);
    if (!blog) {
      return res
        .status(404)
        .send({ status: false, msg: "Blog does not exist" });
    }

    if (blog.isDeleted) {
      return res
        .status(404)
        .send({ status: false, msg: "Blog is already deleted" });
    }

    const { title, content, tags, subcategory } = req.body;

    const updatedBlog = await blogModel.findOneAndUpdate(
      { _id: blogId },
      {
        $set: {
          title: title,
          content: content,
          isPublished: true,
          subcategory: subcategory,
          tags: tags,
          publishedAt: new Date(),
        },
      },
      { new: true }
    );

    return res.status(200).send({ status: true, data: updatedBlog });
  } catch (error) {
    console.log("Error:", error.message);
    return res
      .status(500)
      .send({ status: false, msg: "Server Error", error: error.message });
  }
};

const deleteBlog = async function (req, res) {
  try {
    const blogId = req.params.id;
    if (!blogId) {
      return res
        .status(400)
        .send({ status: false, msg: "Blog Id is required" });
    }

    const blog = await blogModel.findById(blogId);
    if (!blog) {
      return res
        .status(404)
        .send({ status: false, msg: "Blog does not exist" });
    }

    if (blog.isDeleted) {
      return res
        .status(404)
        .send({ status: false, msg: "Blog is already deleted" });
    }

    const deletedBlog = await blogModel.findOneAndUpdate(
      { _id: blogId },
      { $set: { isDeleted: true, deletedAt: new Date() } },
      { new: true }
    );

    return res.status(200).send({ status: true, data: deletedBlog });
  } catch (error) {
    console.log("Error:", error.message);
    return res
      .status(500)
      .send({ status: false, msg: "Server Error", error: error.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  getBlogById,
};
