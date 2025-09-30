import React, { useEffect, useState } from "react";
import { useExpenseStore } from "../store/expenseStore";
import { v4 as uuidv4 } from "uuid";
import type { Expense } from "../types/expense";
import { useThemeStore } from "../store/themeStore";

const ExpenseForm = () => {
  const darkMode = useThemeStore((state) => state.darkMode);

  const [editId, setEditId] = useState<string | null>(null);
  const addExpense = useExpenseStore((state) => state.addExpense);
  const updateExpense = useExpenseStore((state) => state.updateExpense);
  const editingExpense = useExpenseStore((state) => state.editingExpense);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingExpense) {
      setDescription(editingExpense.description);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
      setPaymentMethod(editingExpense.paymentMethod);
      setEditId(editingExpense.id);
    }
  }, [editingExpense]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || !description || amount <= 0 || !category || !date || !paymentMethod) {
      alert("Please fill all fields correctly");
      return;
    }

    const expenseData: Expense = {
      id: editId || uuidv4(),
      description,
      amount: Number(amount),
      category,
      date,
      paymentMethod,
    };

    if (editId) {
      updateExpense(expenseData);
      setEditId(null);
    } else {
      addExpense(expenseData);
    }

    setDescription("");
    setAmount("");
    setCategory("");
    setDate("");
    setPaymentMethod("");
  };

  const inputClass = `w-full p-2 border rounded focus:outline-none focus:ring-2 ${
    darkMode
      ? "border-zinc-700 bg-zinc-900 text-white placeholder-gray-400 focus:ring-blue-500"
      : "border-gray-300 bg-white text-black placeholder-gray-600 focus:ring-blue-400"
  }`;

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-2xl mx-auto p-6 rounded-lg shadow-md space-y-4 ${
        darkMode ? "bg-zinc-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-bold text-center">
        {editId ? "Edit Expense" : "Add Expense"}
      </h2>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={inputClass}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value ? Number(e.target.value) : "")
        }
        className={inputClass}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={inputClass}
      />

      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className={inputClass}
      >
        <option value="">Select Payment Method</option>
        <option value="Cash">Cash</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="UPI">UPI</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={inputClass}
      />

      <button
        type="submit"
        className={`w-full p-2 rounded font-bold transition ${
          darkMode
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {editId ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default ExpenseForm;
