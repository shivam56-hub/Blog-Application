# 📝 Blog Application

A responsive and interactive Blog Application built using **HTML, CSS, and JavaScript**.

The application allows users to register and log in, create and manage blog posts, search blogs, and manage their posts through a protected dashboard. Blog data is persisted using **LocalStorage**, while `blog.json` is used for initial/sample blog data.

---

## 🚀 Features

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

## 🛠️ Technologies Used

- **HTML5** – Structure of the application
- **CSS3** – Styling and responsive design
- **JavaScript (ES6+)** – Application logic and DOM manipulation
- **LocalStorage** – Client-side data persistence
- **JSON** – Initial blog data storage

---

## 📁 Project Structure

```text
Blog-Application/
|──blog.json
│── index.html
│── login.html
│── register.html
│── dashboard.html
│── create-blog.html
│── css/
│── js/
│── images/
│── README.md
```

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/shivam56-hub/Blog-Application.git
```

2. Open the project folder

```bash
cd Blog-Application
```

3. Open `index.html` in your browser or use the VS Code Live Server extension.

## 🎯 Learning Outcomes

* Responsive web design
* DOM manipulation
* JavaScript event handling
* Search functionality
* UI/UX design principles
* Frontend project structure

## 🔮 Future Improvements

* Backend integration with Node.js and Express.js
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

