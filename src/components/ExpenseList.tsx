import { useExpenseStore } from "../store/expenseStore";
import React from "react";
import { useThemeStore } from "../store/themeStore";

const ExpenseList = () => {
  const expenses = useExpenseStore((state) => state.expenses);
  const deleteExpense = useExpenseStore((state) => state.deleteExpense);
  const setEditExpense = useExpenseStore((state) => state.setEditExpense);  
  const darkMode=useThemeStore((state)=>state.darkMode)
    
  const totalExpense=expenses.reduce((sum,expense)=>sum+expense.amount,0);

  return (
    <div className={`max-w-2xl mx-auto mt-5 p-6 rounded-lg shadow-md ${darkMode ? "bg-zinc-800 text-white" : "bg-gray-50 text-black"}`}>
<div className={`p-4 rounded shadow-md mb-2 ${darkMode ? "bg-zinc-700 text-white" : "bg-white text-black"}`}>
        <h2 className="text-lg font-bold">Total Expense</h2>
        <p className="text-2xl font-bold">₹ {totalExpense.toFixed(2)}</p>
      </div>
      <h2 className="text-2xl font-bold text-center mb-4">Expenses:</h2>

      {expenses.length === 0 && (
        <p className="text-center text-gray-500">No Expenses Yet!!!</p>
      )}

      <ul className="space-y-4">
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className={`${darkMode ? "bg-zinc-700 text-white" : "bg-gray-50 text-black"} flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow-sm `}
          >
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-lg">{expense.description}</span>
              <span className="text-green-600 font-bold">₹{expense.amount}</span>
              <span className="text-sm text-gray-600">{expense.category}</span>
              <span className="text-xs text-gray-400">{expense.date}</span>
              <span className="text-xs text-blue-500">{expense.paymentMethod}</span>
            </div>

            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                onClick={() => setEditExpense(expense)}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={() => deleteExpense(expense.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
