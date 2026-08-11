# 📝 Blog Application

A full-stack Blog Application that allows users to register, login, create and manage their own blogs. The application uses JWT authentication for secure user access and MongoDB for storing users and blog data.

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

```text
Blog-Application/
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
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

1. User Registration
2. User Login
3. Create Blog

### 🔐 Authentication
- User Registration
- User Login
- Logout functionality
- Protected Dashboard access

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

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/shivam56-hub/Blog-Application.git
```

2. Open the project folder

```bash
cd frontend
cd backend 
```

3. Open `index.html` in your browser or use the VS Code Live Server extension.
4. Run npm Start for backend server

## Create .env
- Make a .env file in our backend folder
  
## 🛠️ frontend & Backend Integration
The frontend communicates with the Express backend using Javascript fetch().
The frontend currently connects to the backend for:
   - User Registration
   - User Login
   - Blog Creation 

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
* connect database(mongoDB)
* mongooses 
* multer
* CRUD


## 🔮 Future Improvements

* Comment system
* Like and bookmark features

## 👨‍💻 Author

**Shivam Kumar**

* GitHub: https://github.com/shivam56-hub
* LinkedIn: https://www.linkedin.com/in/shivam-kumar1105

## 📄 License

This project is developed for learning and portfolio purposes.

