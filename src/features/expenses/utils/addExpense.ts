import { toast } from "react-toastify";

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
    } else {
      toast.success("Dépense ajoutée avec succès !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
