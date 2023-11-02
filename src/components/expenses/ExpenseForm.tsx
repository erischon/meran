export default function ExpenseForm() {
  const expenseFields = {
    user: "Référence de l'utilisateur",
    category: "Référence de la catégorie de dépenses",
    date: "Date de la dépense",
    amount: "Montant de la dépense",
    currency: "Devise de la dépense",
    description: "Description de la dépense",
    receiptImageURL: "URL de l'image du reçu (optionnel)",
    tvaRate: "Taux de TVA applicable",
    tvaAmount: "Montant de la TVA",
    totalAmount: "Montant total (incluant la TVA)",
    createdAt: "Date de création",
    updatedAt: "Date de mise à jour",
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Ajouter une dépense</h2>

      <form>
        <div className="flex flex-col space-y-2">
          <label htmlFor="title">Titre</label>
          <input type="text" id="title" name="title" className="" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="amount">Montant</label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
      </form>
    </div>
  );
}
