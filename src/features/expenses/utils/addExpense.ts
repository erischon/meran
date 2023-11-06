export async function addExpense(expense: any): Promise<void> {
  const endpoint = `http://localhost:3000/api/expenses`;

  try {
    const res = await fetch("http://localhost:3000/api/expenses", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(expense),
    });

    if (!res.ok) {
      throw new Error("Failed to create an expense");
    }
  } catch (error) {
    console.log(error);
  }
}
