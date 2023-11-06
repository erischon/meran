import ExpenseForm from "@/features/expenses/components/ExpenseForm";
import ExpensesList from "@/features/expenses/components/ExpensesList";

export default function ExpensePage() {
  return (
    <main>
      <h1>ExpensePage</h1>

      <ExpensesList />

      <ExpenseForm />
    </main>
  );
}
