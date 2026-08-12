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
- User profile
- Logout functionality

  
---

### 📝 Blog Management
- Create a new blog
- Upload blog images
- Edit blogs
- Delete blogs
- Publish or save blogs as drafts
- View user-specific blogs
- Blog status management


### 🔎 Search
- Search blogs by:
  - Title
  - Category
  - Author

### 📊 Dashboard
- Total number of blogs
- Published blogs count
- Draft blogs count
- Display logged-in user's blogs
- Edit and delete blog options


### 🛠️ Technologies Used

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


### 📁 Project Structure

```text
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
│   ├── images/
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


## 📝 Blog Management
- Create new blog posts
- View blogs on the Home page
- View blogs on the Dashboard
- Edit existing blogs
- Delete blogs
- Blog status support (Published / Draft)
- Automatic blog ID generation


## 💾 Data Management
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

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/shivam56-hub/Blog-Application.git
```

2. Open the project folder

```bash
cd Blog-Application/backend
npm install
npm start
```

3. Run npm Start for backend server start
   - The Backend will run on:
     http://localhost:5000
4. Open `index.html` in your browser or use the VS Code Live Server extension.
   - The frontend will run on:
     http://127.0.0.1:5500

## Create .env
- Make a .env file in our backend folder
  
** Note: Never upload your .env file to Github
 
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
## Security
  - Passwords are hashed using bcrypt.
  - JWT is used for authentication.
  - Protected routes require a valid authentication token.
  - .env is excluded from Git tracking.
  - Sensitive credentials are not stored in the source code.

## 🎯 Learning Outcomes
* HTML5 and CSS3
* Responsive web design
* DOM manipulation
* JavaScript event handling
* Search functionality
* UI/UX design principles
* Node.js
* Fetch API
* CORS
* HTTP methods
* MongoDB Database Integration
* Mongoose
* Multer
* CRUD
* JWT 


## 🔮 Future Improvements

* Comment system
* Like and bookmark features
* add admin dashboard

## 👨‍💻 Author

**Shivam Kumar**
Full Stack / MERN Developer

* GitHub: https://github.com/shivam56-hub
* LinkedIn: https://www.linkedin.com/in/shivam-kumar1105

## 📄 License

This project is developed for learning and portfolio purposes.

