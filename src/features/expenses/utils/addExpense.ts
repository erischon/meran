export async function addExpense(expense: any): Promise<void> {
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/expenses`;

  try {
    const res = await fetch(endpoint, {
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
