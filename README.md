# 📁 File Upload Microservice – Node.js Backend

This is a **backend microservice** for secure and efficient image uploads. It handles everything from file validation, image resizing, uploading to Cloudinary, saving metadata in a database, and securing routes with JWT.

Built using **Node.js, Express, Multer, Sharp, Cloudinary, Sequelize, PostgreSQL, JWT.**

---

## ⚙️ Features

- ✅ Upload & validate image files (JPEG, PNG, GIF)
- 📦 Resize images using `sharp`
- ☁️ Upload to Cloudinary
- 🧾 Store metadata in PostgreSQL using Sequelize
- 🔐 Secure upload route using JWT authentication
- 📂 Clean project structure (controllers, middleware, routes)

---

## 📁 Folder Structure

```

src/
│
├── controllers/
├── middleware/
│   ├── authentication.js
│   ├── imageResize.js
│   └── validators/
├── models/
├── routes/
├── config/
│   └── cloudinary.js
├── service/
├── uploads/
└── index.js

````

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ajmal92786/multer-cloudinary-image-upload-backend.git
cd multer-cloudinary-image-upload-backend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=8000

# Cloudinary credentials
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# JWT secret
JWT_SECRET=your_jwt_secret

# Database
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_DIALECT=postgres
```

### 4. Setup Database

```bash
npx sequelize-cli db:migrate
```

### 5. Start the Server

```bash
npm run dev
```

The server will start on `http://localhost:8000`

---

## 🔐 Authentication

All upload routes are **protected using JWT**.

Add this header to your frontend requests:

```http
Authorization: Bearer <your_token>
```

---

## 🔄 API Endpoint

### `POST /upload`

* Upload a single image file.
* Resize and compress it.
* Uploads it to Cloudinary.
* Saves metadata in DB.

#### Form Data:

```
file: image.jpg
```

---

## 🔗 Connecting with Frontend

To connect this backend with a frontend:

1. **Use Axios or Fetch** to make a `POST` request to `/upload`.
2. Make sure to:

   * Send the image in `FormData`.
   * Set the `Authorization` header with JWT.
3. Display the uploaded image using the `secure_url` from the response.

---

## 📸 Example Response

```json
{
  "message": "File uploaded successfully",
  "uploadResult": {
    "secure_url": "https://res.cloudinary.com/yourname/image/upload/...."
  }
}
```

---

## 📦 Technologies Used

* Node.js
* Express.js
* Multer
* Sharp
* Cloudinary
* Sequelize (PostgreSQL)
* JWT

---

## 🙌 Contributions

This is a beginner-friendly project. Feel free to fork and contribute!

---

## 📫 Connect With Me

Built with ❤️ by **Mohd Ajmal Raza**

* ✉️ [ajmalbly27@gmail.com](mailto:ajmalbly27@gmail.com)
* 🔗 [LinkedIn](https://linkedin.com/in/mohd-ajmal-raza)

---
