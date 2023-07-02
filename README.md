[![N|Solid](https://iili.io/Hi9giog.png)](https://www.enverx.com/)

EnverX offers a simple and convenient platform to fund early-stage projects
and trade future carbon credits.

## _Assginment For Backend Developer Role_

### Instructions

```diff
- Fork this repository
- Take a fresh `pull`
- Create a `development` branch
- `Push` the updated code after task completion
Note: Make sure to add proper `commit` messages
```

### Task Requirements

1. Create a RESTful API for a simple blog application.
2. Use Node.js and Express.js as the backend framework.
3. Implement CRUD (Create, Read, Update, Delete) operations for blog posts.
4. Store the blog posts in a dB
5. Include validation for the API endpoints to ensure data integrity.
6. Implement error handling and return appropriate HTTP status codes.
7. Use Git for version control and host the project on GitHub.
8. Write clear and concise documentation on how to set up and use the API.

### Functional Requirements

1. Set up a new Node.js project and initialize it with a package.json file.
2. Create the necessary Express.js routes and controllers for CRUD operations on blog posts.

- `GET /posts` - Get all blog posts (Mandatory: Apply sorting based on created Date, blog name and filters based on category).
- `GET /posts/:id` - Get a specific blog post by ID.
- `POST /posts` - Create a new blog post.
- `PUT /posts/:id` - Update an existing blog post.
- `DELETE /posts/:id` - Delete a blog post.

3. Implement validation for the API endpoints to ensure the data is correct and complete.
4. Handle errors gracefully and return appropriate HTTP status codes (e.g., 404 for not found, 500 for server errors, etc.).
5. Test the API endpoints using a tool like Postman or cURL.
6. Write a README.md file with instructions on setting up the project, running it, and using the API.
7. Initialize a Git repository, commit your code regularly, and push it to GitHub.
8. Optionally, include any additional features or improvements you think would enhance the API.

### Timeline

The estimated time to complete this assignment is 6-7 hours, but it may vary based on your familiarity and experience with the technologies.

### To Be Considered

1. The submitted code should be plagiarism free otherwise your application will be disqualified
2. Please complete the assignment and submit it to us by the submission deadline assigned to you.
3. follow the instructions carefully, as we will evaluate your code, documentation, and adherence to best practices. Once you have finished, please send us the GitHub repository link.
4. If you have any questions or need further clarification, please don't hesitate to reach out to us at hr@enverx.com. We look forward to reviewing your work and discussing it with you in the next stage of the interview process.

### solution :-

# Simple Blog Application API

This is a RESTful API for a simple blog application. It provides CRUD (Create, Read, Update, Delete) operations for managing blog posts. The API is built using Node.js and Express.js framework, and it interacts with a NoSQL database to store the blog post data.

## Features

- Get all blog posts
- Get a specific blog post by ID
- Create a new blog post
- Update an existing blog post
- Delete a blog post

## Prerequisites

- Node.js 
- MongoDB 

## Installation

1. Clone the repository:

git clone https://github.com/satyaveer1994/enverx-be-developer-assignment.git

2. Install the dependencies:

npm install

The server will start running at `http://localhost:3000`.

## API Endpoints

- GET /posts - Get all blog posts
- GET /posts/:id - Get a specific blog post by ID
- POST /posts - Create a new blog post
- PUT /posts/:id - Update an existing blog post
- DELETE /posts/:id - Delete a blog post

For detailed information about each endpoint and their request/response formats, please refer to the API documentation.

# GET /posts

Get all blog posts.

Response:

           HTTP/1.1 200 OK
     Content-Type: application/json

    {
     "status": true,
     "count": 3,
    "data": [
    {
      "id": "123",
      "title": "Sample Blog Post 1",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "createdAt": "2023-06-28T10:30:00Z",
      "tags": ["technology", "programming"],
      "category": ["web development"],
      "isPublished": true
    },
    {
      "id": "456",
      "title": "Sample Blog Post 2",
      "content": "Praesent in aliquet mauris, ac ultrices metus.",
      "createdAt": "2023-06-30T14:45:00Z",
      "tags": ["design", "inspiration"],
      "category": ["graphic design"],
      "isPublished": true
    },
    {
      "id": "789",
      "title": "Sample Blog Post 3",
      "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      "createdAt": "2023-07-01T09:15:00Z",
      "tags": ["health", "wellness"],
      "category": ["lifestyle"],
      "isPublished": true
    }
    ]
    }

# GET /posts/:id

Get a specific blog post by ID.

Response:

         HTTP/1.1 200 OK
      Content-Type: application/json

    {
     "status": true,
     "data": {
     "id": "123",
      "title": "Sample Blog Post 1",
     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "createdAt": "2023-06-28T10:30:00Z",
    "tags": ["technology", "programming"],
    "category": ["web development"],
    "isPublished": true
    }
     }

# POST /posts

Create a new blog post.

Request:

        POST /posts
    Content-Type: application/json

    {
    "title": "New Blog Post",
    "content": "Sed quis aliquet lectus, id venenatis sapien.",
    "tags": ["technology", "programming"],
    "category": ["web development"]
    }

Response:

          HTTP/1.1 201 Created
    Content-Type: application/json

     {
    "status": true,
    "data": {
        "title": "New Blog Post",
        "content": "Sed quis aliquet lectus, id venenatis sapien.",
        "category": [
            "web development"
        ],
        "tags": [
            "technology",
            "programming"
        ],
        "isDeleted": false,
        "isPublished": false,
        "_id": "64a1ac0d99c20e69345494dd",
        "createdAt": "2023-07-02T16:55:41.845Z",
        "updatedAt": "2023-07-02T16:55:41.845Z",
        "__v": 0
    }
    }

# PUT /posts/:id

Update an existing blog post.

Request:

          PUT /posts/123
    Content-Type: application/json

    {
    "title": "Updated Blog Post",
    "content": "Donec rutrum leo ac nunc venenatis finibus.",
    "tags": ["design", "inspiration"],
    "category": ["graphic design"]
    }

Response:

        HTTP/1.1 200 OK
       Content-Type: application/json

      {
       "status": true,
       "data": {
        "id": "123",
       "title": "Updated Blog Post",
      "content": "Donec rutrum leo ac nunc venenatis finibus.",
      "createdAt": "2023-06-28T10:30:00Z",
      "tags": ["design", "inspiration"],
      "category": ["graphic design"],
      "isPublished": true
      }
     }

# DELETE /posts/:id

Delete a blog post.

Response:
         
         HTTP/1.1 200 OK
     Content-Type: application/json

    {
     "status": true,
     "data": {
    "id": "123",
    "title": "Updated Blog Post",
    "content": "Donec rutrum leo ac nunc venenatis finibus.",
    "createdAt": "2023-06-28T10:30:00Z",
    "tags": ["design", "inspiration"],
    "category": ["graphic design"],
    "isPublished": true,
    "deletedAt": "2023-07-01T12:30:00Z",
    "isDeleted": true
     }
    }

## Error Handling

The API handles errors gracefully and returns appropriate HTTP status codes along with error messages in case of any failures or invalid requests.

## Validation

Input validation is implemented for the API endpoints to ensure data integrity. The API validates the required fields and checks for data consistency before processing the requests.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the functionality of the API, feel free to submit a pull request.

## License

This project is licensed under the MIT License. You can find the license information in the [LICENSE](LICENSE) file.
