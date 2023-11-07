"use client";

import { useEffect, useState } from "react";

import { getExpenses } from "@/features/expenses/utils/getExpenses";

export default function ExpensesList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getExpenses();

      console.log("=== Data", data.expenses);

      if (!data) return console.log("No expenses found");

      setExpenses(data.expenses);
    }

    getData();
  }, []);

  return (
    <>
      <h2>Expenses</h2>

      <ul>
        {expenses.map((expense, k) => (
          <li key={k} className="flex">
            <p>{expense.description}</p>
            <p>{expense.amount}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
