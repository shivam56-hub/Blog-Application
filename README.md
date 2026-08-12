# 📝 Blog Application

A full-stack Blog Application built with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. The application provides JWT-based authentication, protected user dashboards, profile management, blog CRUD operations, image uploads, draft/published status management, and dynamic blog search.
---

## 🚀 Features

### 👤 User Authentication

- User Registration
- User Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes
- Secure dashboard access
- User profile
- Logout functionality

---

### 📝 Blog Management

- Create a new blog
- Upload blog images
- Edit blogs
- Delete blogs
- Publish blogs
- Save blogs as drafts
- View user-specific blogs
- Blog status management

### 🔎 Search

- Search blogs by:
  - Title
  - Category
  - Author

### 📊 Dashboard

- Total blogs count
- Published blogs count
- Draft blogs count
- View logged-in user's blogs
- Edit blogs
- Delete blogs
- Blog status management

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap

### Backend

- Node.js
- Express.js
- REST API
- CORS
- Multer
- Cloudinary

### Database

- MongoDB
- Mongoose

---

### Authentication & Security

- JWT (JSON Web Token)
- bcrypt.js

### Development Tools

- VS Code
- Thunder Client
- Git & GitHub

## 📁 Project Structure

````text
Blog-Application/
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── css/
│   ├── javascript/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── create-blog.html
│   └── profile.html
│
└── README.md


## 🔗 REST APIs

- User Registration
- User Login
- User Profile
- Create Blog
- Get Blogs
- Get Blog by ID
- Update Blog
- Delete Blog
- Update Blog Status


### 📝 Blog Management
- Create new blog posts
- View blogs on the Home page
- View blogs on the Dashboard
- Edit existing blogs
- Delete blogs
- Blog status support (Published / Draft)
- Automatic blog ID generation


### 💾 Data Management
- Initial blog data loaded from `Database`
- Blog data stored in MongoDB
- Created, edited and deleted blogs remain available after page refresh
- Home page and Dashboard use the same database data

### 🎨 UI & Responsive Design
- Clean and user-friendly interface
- Responsive layout
- Blog cards
- Dashboard for blog management
- Navigation based on login state

---
## 🖼️ Image Storage

- Blog images are uploaded using Multer.
- Images are stored securely on Cloudinary.
- Cloudinary provides a permanent HTTPS URL for each uploaded image.
- The Cloudinary image URL is stored in MongoDB.
- This prevents images from being lost when the backend server is redeployed.

## 📦 Installation

###1. Clone the repository

```bash
git clone https://github.com/shivam56-hub/Blog-Application.git
````

2. Open the project folder
   
   -cd Blog-Application
     -For Backend
      -cd backend
      -npm install
      -npm start
   
     -For Frontend
      - run index.html 

## Create .env

  - Make a .env file in our backend folder
  - Note: Never upload your .env file to Github

## 🌐 Live Demo

**Live Application:** https://blog-application-six-chi.vercel.app

**Backend API:** https://blog-application-086t.onrender.com


## Testing

- The REST APIs were tested using Thunder Client.
  -Tested functionality includes:
  - User Registration
  - User Login
  - JWT authentication
  - User Profile
  - Create blog
  - Get blog
  - Update blog
  - Delete blog
  - Blog status management


## ☁️ Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

The frontend communicates with the deployed backend through REST APIs.

## Security

-  Passwords are hashed using bcrypt.
-  JWT is used for authentication.
-  Protected routes require a valid JWT token.
-  User-specific blog access is enforced through authentication.
-  Sensitive credentials are not stored in the source code.
- Cloudinary API credentials are stored securely using environment variables.
- Cloudinary credentials are not committed to GitHub.
-  .env is excluded from Git tracking.

---

## 🎯 Learning Outcomes

- HTML5 & CSS3
- Responsive Web Design
- JavaScript & DOM Manipulation
- Event & Form Handling
- Fetch API
- REST API Development
- Node.js & Express.js
- MongoDB & Mongoose
- CRUD Operations
- JWT Authentication
- Protected Routes
- Password Hashing with bcrypt
- Image Upload Handling with Multer
- CORS
- Client-Server Communication
- Frontend-Backend Integration
- Git & GitHub
- Cloudinary image storage
- Multer file handling
- Environment variable management
- Deployment using Vercel and Render

## 🔮 Future Improvements

- Comment system
- Like and bookmark functionality
- Admin dashboard
- Rich text editor for blog creation
- Cloud-based image storage
- Pagination
- Improved role-based access control

## 👨‍💻 Author

**Shivam Kumar**
Full Stack / MERN Developer

- GitHub: https\://github.com/shivam56-hub
- LinkedIn: [https://www.linkedin.com/in/shivam-kumar1105](https://www.linkedin.com/in/shivam-kumar1105)

## 📄 License

This project is developed for learning and portfolio purposes.
