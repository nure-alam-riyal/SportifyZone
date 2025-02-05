
# 🏆 SportifyZone

🚀 **Live Link:** [SportifyZone](https://equipment-sports.web.app/)

SportifyZone is a **sports equipment management web application** that allows users to efficiently manage sports gear. It provides a user-friendly interface to **add, update, and delete equipment** while ensuring security through **Firebase authentication**. The application is **fully responsive**, making it accessible across different devices.

---
## 🛠️ Usage

### 🔹 Add Equipment
1. Navigate to the dashboard.
2. Click on **"Add Equipment"**.
3. Fill in the required details and submit.

### 🔹 Update Equipment
1. Select an item from the inventory.
2. Click **"Edit"**, make changes, and save.

### 🔹 Delete Equipment
1. Click the **"Delete"** button on an item.
2. Confirm the action in the popup.

### 🔹 Authentication
- Users must **Sign Up / Log In** to manage equipment.
- Firebase handles **secure authentication**.

---

## 📖 Table of Contents

- [🌟 Features](#-features)
- [🚀 Live Demo](#-live-demo)
- [🔧 Installation](#-installation)
- [🛠️ Usage](#-usage)
- [⚙️ Configuration](#-configuration)
- [📦 Dependencies](#-dependencies)
- [❓ Troubleshooting](#-troubleshooting)
- [🙌 Contributors](#-contributors)
- [📜 License](#-license)

---

## 🌟 Features

✅ **Fully Responsive** – Adapts to all screen sizes for a seamless experience.  
✅ **CRUD Operations** – Users can **Create, Read, Update, and Delete** sports equipment.  
✅ **Firebase Authentication** – Secure login and user authentication.  
✅ **Firebase Hosting** – Hosted on Firebase for reliability and speed.  
✅ **React Reveal Animations** – Smooth transitions and animations for better UI experience.  
✅ **Real-Time Updates** – Changes reflect instantly using Firebase.  
✅ **Interactive UI Elements** – Uses tooltips, icons, and rating components.  
✅ **SweetAlert2** – User-friendly pop-up alerts for confirmation and notifications.  
✅ **React Hot Toast** – Elegant notifications for user actions.  
✅ **Star Ratings & Reviews** – Users can rate and review sports equipment.  
✅ **Swiper.js Integration** – Carousel for showcasing featured products.  

---

## 🚀 Live Demo

Experience SportifyZone in action!  
🔗 **[Click here to explore the live site](https://equipment-sports.web.app/)**

---

## 🔧 Installation

Follow these steps to set up the project locally:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repository/sportifyzone.git
cd sportifyzone
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env.local` file in the root directory and add the following Firebase credentials:
```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
```

### 4️⃣ Start the Development Server
```sh
npm run dev
```

---



## ⚙️ Configuration

Ensure that **Firebase Authentication and Firestore Database** are properly set up in your Firebase console.  
- Enable **Email/Password Authentication**.  
- Create a **Firestore Database** with appropriate rules.  

---

## 📦 Dependencies

### 🔹 Development Dependencies
```json
{
    "@eslint/js": "^9.15.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.15.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^6.0.1"
}
```

### 🔹 Production Dependencies
```json
{
    "@emotion/react": "^11.13.5",
    "firebase": "^11.0.2",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "rating-star": "^1.1.0",
    "react": "^18.3.1",
    "react-awesome-reveal": "^4.2.14",
    "react-datepicker": "^7.5.0",
    "react-dom": "^18.3.1",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.4.0",
    "react-rating": "^2.0.5",
    "react-router-dom": "^7.0.2",
    "react-simple-star-rating": "^5.1.7",
    "react-star-ratings": "^2.3.0",
    "react-tooltip": "^5.28.0",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.14.5",
    "swiper": "^11.1.15"
}
```

---

## ❓ Troubleshooting

### 🔹 Firebase Authentication Fails?
- Ensure Firebase **API keys** in `.env.local` are correct.
- Check if **Email/Password Authentication** is enabled in Firebase.

### 🔹 Styling Issues?
- Ensure **Tailwind CSS** and **DaisyUI** are installed correctly.
- Restart the server after installing dependencies.

### 🔹 Deployment Issues?
- Make sure you have **Firebase CLI** installed:
  ```sh
  npm install -g firebase-tools
  ```
- Deploy using:
  ```sh
  firebase deploy
  ```

---

## 🙌 Contributors

- **Your Name** - [GitHub Profile](https://github.com/your-profile)
- **Other Contributors** (if any)

Want to contribute? Feel free to submit a **Pull Request**! 🚀

---

## 📜 License

This project is **open-source** and available under the **MIT License**.

---

🎯 *Built with ❤️ using React, Tailwind CSS, and Firebase for a seamless experience!* 🚀
```

---

### 🔥 What's Improved?  
✅ **Organized Structure** – Better readability and flow.  
✅ **More Features Listed** – Enhanced with animations, notifications, and real-time updates.  
✅ **Step-by-Step Usage & Setup** – Easier for new developers.  
✅ **Troubleshooting Section** – Helps resolve common issues quickly.  
✅ **Attractive Styling** – Markdown formatting for clarity.  

Would you like any additional sections or modifications? 😊
 
