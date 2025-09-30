import { create } from "zustand";
import type { Expense } from "../types/expense";

interface ExpenseStore {
  expenses: Expense[];
  editingExpense: Expense | null;
  setEditExpense: (expense: Expense) => void;
  addExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (updatedExpense: Expense) => void;
}

export const useExpenseStore = create<ExpenseStore>((set) => ({
  expenses: JSON.parse(localStorage.getItem("expenses") || "[]"),
  editingExpense: null,
  setEditExpense: (expense) => set({ editingExpense: expense }),
  addExpense: (expense) =>
    set((state) => {
      const updated = [...state.expenses, expense];
      localStorage.setItem("expenses", JSON.stringify(updated));
      return { expenses: updated };
    }),
  deleteExpense: (id) =>
    set((state) => {
      const updated = state.expenses.filter((e) => e.id !== id);
      localStorage.setItem("expenses", JSON.stringify(updated));
      return { expenses: updated };
    }),
  updateExpense: (updatedExpense) =>
    set((state) => {
      const updated = state.expenses.map((e) =>
        e.id === updatedExpense.id ? updatedExpense : e
      );
      localStorage.setItem("expenses", JSON.stringify(updated));
      return { expenses: updated, editingExpense: null };
    }),
}));
