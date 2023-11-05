"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/nextjs";

type FormValues = {
  category: string;
  day: string;
  amount: number;
  hasVAT: boolean;
  description: string;
  receiptImageURL: string;
  vatRate: number;
  vatAmount: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export default function ExpenseForm() {
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState, setValue, reset } = form;
  const { errors } = formState;
  const { user } = useUser();

  useEffect(() => {
    setValue("hasVAT", false);
  }, []);

  useEffect(() => {
    handlevatRate(form.watch("vatRate"));
  }, [form.watch("amount")]);

  const onSubmit = (data: FormValues) => {
    data.userId = user?.id as string;

    data.day = new Date(data.day).toISOString();
    data.createdAt = new Date().toISOString();
    data.updatedAt = new Date().toISOString();

    console.log("=== Form submitted", data);
    reset();
  };

  const handlevatRate = (vatRate: any) => {
    const vatAmount = (
      form.watch("amount") -
      form.watch("amount") / (1 + vatRate / 100)
    ).toFixed(2);

    setValue("vatAmount", parseFloat(vatAmount));
  };

  const formFields = [
    {
      name: "category",
      label: "Catégorie",
      inputField: () => (
        <select
          id="category"
          {...register("category", {
            required: "La catégorie est requise.",
          })}
          className="col-span-6"
        >
          <option value="">-- Choisir une catégorie --</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      ),
    },
    {
      name: "day",
      label: "Date",
      inputField: () => (
        <input
          type="date"
          id="day"
          {...register("day", { required: "La date est requise." })}
          className="col-span-6"
        />
      ),
    },
    {
      name: "amount",
      label: "Montant (ttc)",
      inputField: () => (
        <input
          type="number"
          id="amount"
          {...register("amount", { required: "Le montant est requis." })}
          className="col-span-6"
        />
      ),
    },
    {
      name: "hasVAT",
      label: "Je déduis la TVA",
      inputField: () => (
        <input
          type="checkbox"
          id="hasVAT"
          {...register("hasVAT")}
          className="col-span-6 justify-self-start"
        />
      ),
    },
    {
      name: "vatRate",
      label: "Taux de TVA",
      inputField: () => (
        <input
          type="number"
          id="vatRate"
          {...register("vatRate", {
            required:
              form.watch("hasVAT") === true
                ? "Quand il y a une TVA, le taux de TVA est requis."
                : "",
            onChange: (e: any) => handlevatRate(e.target.value),
          })}
          className="col-span-6"
        />
      ),
      specificClass: true,
    },
    {
      name: "vatAmount",
      label: "(montant de la TVA)",
      inputField: () => (
        <input
          type="number"
          id="vatAmount"
          {...register("vatAmount")}
          className="col-span-6"
          readOnly={true}
        />
      ),
      specificClass: true,
    },
    {
      name: "description",
      label: "Description",
      inputField: () => (
        <input
          type="text"
          id="description"
          {...register("description", {
            required: "La description est requise.",
          })}
          className="col-span-6"
        />
      ),
    },
    {
      name: "receiptImageURL",
      label: "Photo du reçu",
      inputField: () => (
        <input
          type="file"
          id="receiptImageURL"
          {...register("receiptImageURL")}
          className="col-span-6"
        />
      ),
    },
  ];

  return (
    <div className="grid max-w-lg">
      <h2 className="text-xl font-semibold py-5">Ajouter une dépense</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="">
        {formFields.map((field, k) => {
          return (
            <div key={k} className="mb-3">
              {!field.specificClass ? (
                <div
                  className={`grid grid-cols-12 justify-start items-center space-x-5`}
                >
                  <label
                    htmlFor={field.name}
                    className="col-span-6 font-semibold tracking-wider"
                  >
                    {field.label}
                  </label>

                  {field.inputField()}
                </div>
              ) : (
                <div
                  className={`${
                    form.watch("hasVAT") === false ? "hidden" : "block"
                  } grid grid-cols-12 justify-start items-center space-x-5`}
                >
                  <label
                    htmlFor={field.name}
                    className="col-span-6 font-semibold tracking-wider"
                  >
                    {field.label}
                  </label>

                  {field.inputField()}
                </div>
              )}

              <p className="text-red-500 italic">
                {errors[field.name as keyof FormValues]?.message}
              </p>
            </div>
          );
        })}

        <button className="bg-sky-300 py-2 px-6 my-5 font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}
