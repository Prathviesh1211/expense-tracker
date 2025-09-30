# Expense Tracker (Practice Project)

This is a **practice project** to learn and experiment with **React**, **TypeScript**, **Zustand**, and **Tailwind CSS**.  
It implements an Expense Tracker with dark mode, state management, and local storage persistence.

---


## Features

- **Add Expense** — Enter description, amount, category, payment method, and date.
- **Edit Expense** — Update any expense entry.
- **Delete Expense** — Remove unwanted expenses.
- **Total Expense Display** — See your total spending in real-time.
- **Dark Mode Support** — Switch between light and dark themes.
- **Persistent Storage** — Data saved to local storage.

---

## 🛠 Tech Stack

- **React** — UI Library  
- **TypeScript** — Type safety and better developer experience  
- **Zustand** — State management  
- **Tailwind CSS** — Styling and responsive design  
- **UUID** — Generate unique IDs for expenses  
- **Local Storage** — Persistent data storage  
- **Vite / Create React App** — Development environment  

---
## Screenshots 
![alt text](<Screenshot 2025-09-30 215614.png>)
![alt text](<Screenshot 2025-09-30 215712.png>)

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
