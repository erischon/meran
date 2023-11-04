"use client";

import { use, useEffect } from "react";
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
  const { register, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  useEffect(() => {
    setValue("hasTva", false);
  }, []);

  const onSubmit = (data: FormValues) => {
    console.log("=== Form submitted", data);
  };

  const handleTvaRate = (e: any) => {
    setValue(
      "tvaAmount",
      form.watch("amount") - form.watch("amount") / (1 + e.target.value / 100)
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Ajouter une dépense</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="">
        <div className="flex flex-col space-y-2">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            {...register("category", { required: "La catégorie est requise." })}
            className=""
          >
            <option value="">-- Choisir une catégorie --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <p className="text-red-500 font-semibold">
            {errors.category?.message}
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="day">Day</label>
          <input
            type="date"
            id="day"
            {...register("day", { required: "La date est requise." })}
            className=""
          />

          <p className="text-red-500 font-semibold">{errors.day?.message}</p>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="amount">Montant (ttc)</label>
          <input
            type="number"
            id="amount"
            {...register("amount", { required: "Le montant est requise." })}
            className="border border-gray-300 p-2 rounded-md"
          />

          <p className="text-red-500 font-semibold">{errors.amount?.message}</p>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <label htmlFor="hasTva">Vous déduisez la TVA ?</label>
          <input
            type="checkbox"
            id="hasTva"
            {...register("hasTva")}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div
          className={`${
            form.watch("hasTva") === false ? "hidden" : "block"
          } flex flex-col space-y-2`}
        >
          <label htmlFor="tvaRate">tvaRate</label>
          <input
            type="number"
            id="tvaRate"
            {...register("tvaRate", {
              required:
                form.watch("hasTva") === true
                  ? "Quand il y a une TVA, le taux de TVA est requis."
                  : "",
              onChange: (e: any) => handleTvaRate(e),
            })}
            className="border border-gray-300 p-2 rounded-md"
          />

          <p className="text-red-500 font-semibold">
            {errors.tvaRate?.message}
          </p>
        </div>

        <div
          className={`${
            form.watch("hasTva") === false ? "hidden" : "block"
          } flex flex-col space-y-2`}
        >
          <label htmlFor="tvaAmount">tvaAmount</label>
          <input
            type="number"
            id="tvaAmount"
            {...register("tvaAmount")}
            className="border border-gray-300 p-2 rounded-md"
            readOnly={true}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="description">description</label>
          <input
            type="text"
            id="description"
            {...register("description", {
              required: "La description est requise.",
            })}
            className="border border-gray-300 p-2 rounded-md"
          />

          <p className="text-red-500 font-semibold">
            {errors.description?.message}
          </p>
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

        <button>Submit</button>
      </form>
    </div>
  );
}
