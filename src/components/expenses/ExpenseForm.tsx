"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  category: string;
  day: string;
  amount: number;
  hasTva: boolean;
  description: string;
  receiptImageURL: string;
  tvaRate: number;
  tvaAmount: number;
};

export default function ExpenseForm() {
  const form = useForm<FormValues>();
  const { register, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log("=== Form submitted", data);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Ajouter une dépense</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="">
        <div className="flex flex-col space-y-2">
          <label htmlFor="category">Category</label>
          <select id="category" {...register("category")} className="">
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
          <input type="date" id="day" {...register("day")} className="" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            {...register("amount")}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="hasTva">hasTva</label>
          <input
            type="checkbox"
            id="hasTva"
            {...register("hasTva")}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="description">description</label>
          <input
            type="text"
            id="description"
            {...register("description")}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="receiptImageURL">receiptImageURL</label>
          <input
            type="file"
            id="receiptImageURL"
            {...register("receiptImageURL")}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="tvaRate">tvaRate</label>
          <input
            type="number"
            id="tvaRate"
            {...register("tvaRate")}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="tvaAmount">tvaAmount</label>
          <input
            type="number"
            id="tvaAmount"
            {...register("tvaAmount")}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
