# Expense Tracker (Practice Project)

This is a **practice project** to learn and experiment with **React**, **TypeScript**, **Zustand**, and **Tailwind CSS**.  
It implements an Expense Tracker with dark mode, state management, and local storage persistence.

---

## Purpose

This project was created for **hands-on practice** to improve skills in:
- **React with TypeScript**
- **State management using Zustand**
- **Dark mode implementation**
- **Styling with Tailwind CSS**
- **Managing form data and lists**
- **Local Storage usage**

---
## Screenshots 
![alt text](<Screenshot 2025-09-30 215614.png>)
![alt text](<Screenshot 2025-09-30 215712.png>)
---
## Features

- Add expense with description, amount, category, payment method, and date.
- Edit expense entries.
- Delete expenses.
- View total expenses dynamically.
- Toggle dark mode.
- Store data in local storage to persist across reloads.

---
## Getting Started

### 1. Clone the repository
```
git clone https://github.com/your-username/expense-tracker-practice.git
cd expense-tracker-practice
```

### 2. Install dependencies
```
npm install
```

### 3. Start development server
```
npm run dev
```
## Folder Structure
expense-tracker/
│
├── src/
│   ├── components/
│   │   ├── ExpenseForm.tsx
│   │   └── ExpenseList.tsx
│   ├── store/
│   │   ├── expenseStore.ts
│   │   └── themeStore.ts
│   ├── types/
│   │   └── expense.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── tailwind.config.js
├── package.json
└── README.md
