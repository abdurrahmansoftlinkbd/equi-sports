# EquiSports: A Sports Equipment Store

[Live Website Link](https://b10-a10-equi-sports-client.web.app/)

## About EquiSports

EquiSports is a dynamic and responsive e-commerce platform dedicated to sports equipment and accessories. The website offers a seamless shopping experience where users can browse, add, and manage sports equipment efficiently. Designed with a modern, intuitive interface, it caters to enthusiasts of various sports disciplines, ensuring a smooth and engaging user experience.

---

## Features

1. **User Authentication**:
   - Secure login and registration functionality with Firebase Authentication.
   - Support for third-party authentication providers (Google, etc.).
2. **Responsive Design**:
   - Optimized for mobile, tablet, and desktop devices.
   - Clean, user-friendly interface for seamless navigation.
3. **Dynamic Equipment Management**:
   - Logged-in users can add, update, and delete their equipment.
   - Interactive My Equipment List section for personal management.
4. **Product Sorting and Categorization**:
   - Sort products by price in ascending order.
   - Category buttons for quick filtering of equipment.
5. **View Details**:
   - Detailed product view with high-quality images, specifications, and ratings.
   - Private route access for logged-in users.
6. **Modern Animations**:
   - Smooth transitions and animations using libraries like React Awesome Reveal.
7. **Dark/Light Mode Toggle**:
   - Switch between dark and light themes for better user comfort.
8. **Advanced Alerts and Notifications**:
   - Custom toast messages for success, error, and warnings with React Hot Toast.
9. **Secure Data Handling**:
   - MongoDB used for backend data storage with protected routes.
   - Environment variables to secure Firebase and database credentials.

---

## Technologies Used

### **Frontend**:

- React.js
- Tailwind CSS
- DaisyUI
- Swiper.js

### **Backend**:

- Node.js
- Express.js

### **Database**:

- MongoDB

### **Authentication**:

- Firebase Authentication

### **Libraries and Packages**:

- React Router DOM
- React Hot Toast
- React Rating Stars Component
- React Awesome Reveal
- Lottie React

### **Hosting**:

- Client: Firebase Hosting
- Server: Vercel

---

## How to Run the Project Locally

Follow the steps below to set up and run the project on your local machine:

### Step 1: Clone the Repository

```bash
git clone https://github.com/abdurrahmansoftlinkbd/equi-sports.git
cd equi-sports
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a .env.local file in the root directory and add the following environment variables:

```bash
VITE_apiKey=Your Firebase API Key
VITE_authDomain=Your Firebase Auth Domain
VITE_projectId=Your Firebase Project ID
VITE_storageBucket=Your Firebase Storage Bucket
VITE_messagingSenderId=Your Firebase Messaging Sender ID
VITE_appId=Your Firebase App ID
```

### Step 4: Run the Project

```bash
npm run dev
```
