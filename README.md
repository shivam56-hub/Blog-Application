# 📝 Blog Application

A full-stack Blog Application developed using **HTML, CSS, JavaScript, Node.js, and Express.js**.

This project started as a frontend-based blog application and was extended with a Node.js and Express backend to create REST APIs for user registration, user login, and blog creation.

---

## 🚀 Features

### Frontend

- Responsive Home Page
- User Registration
- User Login
- Logout functionality
- Protected Dashboard
- Create Blog
- Edit Blog
- Delete Blog
- Search Blogs
- Dynamic Blog Rendering
- Blog categories
- Author and date information
- Blog status (Published/Draft)
- LocalStorage-based frontend data management
- JSON-based initial blog data

### Backend

- Node.js backend server
- Express.js server
- REST API architecture
- User Registration API
- User Login API
- Create Blog API
- JSON request/response handling
- CORS configuration
- Frontend-to-backend API integration

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- JSON
- LocalStorage

### Backend
- Node.js
- Express.js
- REST API
- CORS
- dotenv

---

## 🔗 REST APIs

1. User Registration
2. User Login
3. Create Blog

## 📁 Project Structure
Blog-Application/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── create-blog.html
│   │
│   ├── css/
│   │   ├── style.css
│   │   ├── auth.css
│   │   ├── dashboard.css
│   │   └── blog.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── auth/
│   │   │   ├── login.js
│   │   │   └── register.js
│   │   │
│   │   ├── blog/
│   │   │   ├── dashboard.js
│   │   │   ├── create-blog.js
│   │   │   └── blog.js
│   │   │
│   │   
│   │
│   └── assets/
│       ├── images/
│       
│
├── backend/
│   ├── server.js
│   ├── package.json
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── blogRoutes.js
│
├── data/
│   └── blog.json
│
├── .gitignore
├── README.md
└── package.json


### 🔐 Authentication
- User Registration
- User Login
- Logout functionality
- Login state management using LocalStorage
- Protected Dashboard access
- Protected Create Blog page

### 📝 Blog Management
- Create new blog posts
- View blogs on the Home page
- View blogs on the Dashboard
- Edit existing blogs
- Delete blogs
- Blog status support (Published / Draft)
- Automatic blog ID generation

### 🔍 Search
- Search blogs by:
  - Blog title
  - Category
  - Author

### 💾 Data Management
- Initial blog data loaded from `blog.json`
- Blog data stored in LocalStorage
- Created, edited and deleted blogs remain available after page refresh
- Home page and Dashboard use the same LocalStorage data

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


## 🔮 Future Improvements

* MongoDB database
* Image upload functionality
* Comment system
* Like and bookmark features

## 👨‍💻 Author

**Shivam Kumar**

* GitHub: https://github.com/shivam56-hub
* LinkedIn: https://www.linkedin.com/in/shivam-kumar1105

## 📄 License

This project is developed for learning and portfolio purposes.

