# Country Explorer 🌍

A React-based country exploration and quiz application that allows users to browse countries, learn facts, and test their knowledge through interactive quizzes.

The project is built with React, Redux Toolkit, and Vite, and deployed via GitHub Pages.

---

## 🚀 Live Demo

https://jaakkopuolakanaho.github.io/Atlas-Flags-JS3-Project

---

## 🧱 Tech Stack

- React
- Vite
- Redux Toolkit
- React Redux
- React Router DOM
- JavaScript (ES Modules)
- CSS

---

## ✨ Features

### 🌍 Country Explorer
- Browse a collection of countries
- View detailed country information
- Responsive card-based UI

### 📖 Learning Mode
- Explore countries in a structured view
- Navigate through country details

### 🎯 Quiz System
- Interactive country quiz
- Score tracking
- Quiz result summary page
- Leaderboard system

### 🏆 Leaderboard
- Stores and displays quiz results
- Encourages repeated learning and improvement

---

## 🧠 State Management

The application uses **Redux Toolkit** for global state handling:

- Country data stored in Redux slice (`countriesSlice`)
- Centralized state for quiz and leaderboard logic
- Predictable state flow across pages

---

## 📁 Project Structure


src/
├─ App.jsx                  # App root
├─ main.jsx                # Entry point
├─ store.js                # Redux store setup
├─ index.css               # Global styles

├─ assets/                 # Static assets

├─ components/             # Reusable UI components
│  ├─ Button.jsx
│  ├─ CountryCardDetails.jsx
│  ├─ FlagsGrid.jsx
│  ├─ Leaderboard.jsx
│  ├─ QuizQuestion.jsx
│  ├─ QuizResult.jsx
│  ├─ QuizSetup.jsx

├─ features/               # Redux slices / state logic
│  ├─ countries/
│  │  ├─ countriesSlice.js

├─ pages/                  # Route-based pages
│  ├─ CountriesCollection.jsx
│  ├─ CountryDetail.jsx
│  ├─ LearnCountries.jsx
│  ├─ Menu.jsx
│  ├─ Quiz.jsx
│  ├─ QuizLeaderboard.jsx


---

## ⚙️ Deployment

This project is deployed using **GitHub Pages**:

- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Output folder: `dist`

---

## 🎯 What I Learned

- Building scalable React applications with Redux Toolkit
- Managing global state across multiple views
- Structuring multi-page apps with React Router
- Creating interactive quiz systems with persistent logic
- Deploying frontend applications using GitHub Pages
- Organizing medium-sized React codebases

---

## 📌 Notes

- This is a learning project focused on state management and frontend architecture
- Data handling and UI logic are fully client-side
