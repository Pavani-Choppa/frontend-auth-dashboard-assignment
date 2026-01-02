# Scalable Web App — Authentication + Dashboard

A full-stack assignment project demonstrating:

- JWT Authentication
- Protected Dashboard
- User Profile Fetch
- CRUD Operations on Tasks
- Responsive UI + Clean UX
- Secure Node.js Backend Integration

---

## 🧩 Tech Stack

### Frontend
- React + Vite
- Axios
- Context-based auth state
- Responsive CSS

### Backend
- Node.js + Express
- MongoDB + Mongoose
- bcrypt (password hashing)
- JWT authentication middleware

---

## 🚀 Features Implemented

### 🔐 Authentication
- Register / Login
- JWT token stored client-side
- Protected routes
- Logout + session clear

### 👤 User Dashboard
- Fetch logged-in user profile (`/me`)
- Display user name
- Logout flow

### 📝 Tasks Entity (CRUD)
- Create task
- List tasks
- Update task status
- Delete task
- Search + Filter UI

---

## 🗂️ Project Structure

```
frontend/
backend/
```

Both hosted in a single repo for evaluation clarity.

---

## 🧪 API Endpoints

### Auth
| Method | Endpoint | Description |
|-------|--------|--------|
| POST | /auth/register | Create user |
| POST | /auth/login | Login + JWT |

### Profile
| Method | Endpoint |
|-------|--------|
| GET | /me |

### Tasks CRUD
| Method | Endpoint |
|-------|--------|
| GET | /tasks |
| POST | /tasks |
| PUT | /tasks/:id |
| DELETE | /tasks/:id |

---

## 🔒 Security Practices Used

- Passwords are hashed using **bcrypt**
- JWT token validation middleware
- User-scoped data access
- Server-side validation & error handling
- Modular backend structure for scaling

---

## 🧰 Postman Collection

Located at:

```
/postman/Assignment-Auth-Dashboard.postman_collection.json
```

Includes:

✔ Auth  
✔ Profile  
✔ Tasks CRUD  
✔ Token variable support

---

## ⚙️ Environment Variables

Backend `.env`

```
MONGO_URI=
JWT_SECRET=
PORT=5000
```

---

## 🧩 Scalability Notes (Production Ready Enhancements)

If taken to production, I would:

- Move to **HttpOnly refresh tokens**
- Add **role-based access control**
- Add **input validation (Joi / Zod)**
- Implement **pagination + indexing**
- Use **Docker + NGINX reverse proxy**
- Setup **CI/CD + environment configs**

This architecture is clean and easy to scale.

---

## 👤 Developer

Built as part of a Frontend Intern Assignment.

```

Professional & clean ✔

---

# 🚀 3) DEPLOYMENT GUIDE

We’ll deploy:

Backend → Render  
Frontend → Vercel

---

## 🌍 Deploy Backend (Render)

Push backend folder to GitHub

Then:

1️⃣ Go to render.com → New Web Service  
2️⃣ Select repo  
3️⃣ Root folder = `backend`  
4️⃣ Environment = **Node**  
5️⃣ Set build & start commands:

```
npm install
node server.js
```

6️⃣ Add environment variables:

```
MONGO_URI=
JWT_SECRET=
```

Render gives you a live API URL:

```
https://your-app.onrender.com
```

Update frontend `api.js`

```js
baseURL: "https://your-app.onrender.com/api"
```

---

## 🌐 Deploy Frontend (Vercel)

1️⃣ Move into frontend folder

```
npm run build
```

2️⃣ Push to GitHub  
3️⃣ Go to vercel.com → New Project  
4️⃣ Select repo  
5️⃣ Framework: **Vite**  
6️⃣ Set ENV:

```
VITE_API_URL = https://your-app.onrender.com/api
```

Deploy ✔

