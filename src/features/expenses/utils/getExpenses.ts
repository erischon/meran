const ENDPOINT = `${process.env.NEXT_PUBLIC_API_URL}/expenses`;

export async function getExpenses() {
  try {
    const res = await fetch(ENDPOINT, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to create an expense");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
