export default function ExpenseForm() {
  const expenseFields = {
    user: "Référence de l'utilisateur",
    category: "Référence de la catégorie de dépenses",
    date: "Date de la dépense",
    amount: "Montant de la dépense",
    description: "Description de la dépense",
    receiptImageURL: "URL de l'image du reçu (optionnel)",
    tvaRate: "Taux de TVA applicable",
    tvaAmount: "Montant de la TVA",
    createdAt: "Date de création",
    updatedAt: "Date de mise à jour",
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Ajouter une dépense</h2>

      <form className="">
        <div className="flex flex-col space-y-2">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" className="">
            <option value="">-- Choisir une catégorie --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="day">Day</label>
          <input type="date" id="day" name="day" className="" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="hasTva">hasTva</label>
          <input
            type="checkbox"
            id="hasTva"
            name="hasTva"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="description">description</label>
          <input
            type="text"
            id="description"
            name="description"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="receiptImageURL">receiptImageURL</label>
          <input
            type="file"
            id="receiptImageURL"
            name="receiptImageURL"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="tvaRate">tvaRate</label>
          <input
            type="number"
            id="tvaRate"
            name="tvaRate"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="tvaAmount">tvaAmount</label>
          <input
            type="number"
            id="tvaAmount"
            name="tvaAmount"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
