import { NextResponse } from "next/server";

import connectDB from "@/services/db";
import Expense from "@/features/expenses/models/expense.models";

export async function POST(request: any) {
  const {
    category,
    day,
    amount,
    hasVAT,
    description,
    vatRate,
    vatAmount,
    userId,
    createdAt,
    updatedAt,
  } = await request.json();

  await connectDB();

  await Expense.create({
    category,
    day,
    amount,
    hasVAT,
    description,
    vatRate,
    vatAmount,
    userId,
    createdAt,
    updatedAt,
  });

  return NextResponse.json({ message: "Expense Created" }, { status: 201 });
}

export async function GET() {
  await connectDB();

  const expenses = await Expense.find();

  return NextResponse.json({ expenses });
}
