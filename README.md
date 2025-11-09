Here is the updated README for **Zones – World Clock**, now including your YouTube demo link in the proper section:

---

# 🌍 Zones — World Clock Application

🔗 **Live Project:** [https://zones-world-clock.netlify.app/](https://zones-world-clock.netlify.app/)

---

## 📌 Overview

**Zones** is a modern and minimal World Clock application that allows users to view the current time across multiple countries and time zones. It provides a smooth UI, fast performance, and accurate time calculations, making it useful for people collaborating internationally, traveling, or planning meetings across different regions.

---

## ✨ Key Features

✅ Real-time clock updates
✅ Search & select time zones
✅ Add/remove multiple clocks
✅ Clean and responsive UI
✅ Lightweight and fast

---

## 🛠️ Tech Stack

### **Frontend**

* React.js
* Tailwind CSS
* JavaScript
* Date & Time API

### **Deployment**

* Netlify

---

## 🧩 How It Works

1. User searches for a country or time zone
2. App fetches and displays correct time using Date API
3. Selected zones appear as separate clock cards
4. Each clock updates in real-time
5. User can remove any clock when needed

---

## 📂 Project Structure

```
/src
  ├── components
  │   ├── ClockCard.jsx
  │   ├── SearchBar.jsx
  ├── pages
  │   └── Home.jsx
  ├── utils
  │   └── timeFunctions.js
  ├── App.js
  ├── index.js
/package.json
```

---

## 🎥 Demo Video

👉 **Watch the full project demonstration on YouTube:**
[https://youtu.be/-QJybKpBkEU](https://youtu.be/-QJybKpBkEU)

---

## ⚙️ Installation & Setup

Install dependencies:

```bash
npm install
```

Start the project:

```bash
npm start
```

Build the project:

```bash
npm run build
```

---

## 💡 Core Logic Breakdown

### ✅ Time Calculation

Uses `Intl.DateTimeFormat` and native Date object for accurate zone-based time.

### ✅ Real-time Sync

`setInterval` ensures each clock updates every second.

### ✅ Zone Search

Search bar filters time zones dynamically as user types.

---

## 🚀 Deployment

Project is deployed on **Netlify** with continuous deployment enabled.

---

## 🤝 Contributing

Contributions are welcome!
Please open an issue or submit a pull request.

---
