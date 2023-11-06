import mongoose, { Schema } from "mongoose";

const expenseSchema = new Schema({
  category: String,
  day: String,
  amount: Number,
  hasVAT: Boolean,
  description: String,
  vatRate: Number,
  vatAmount: Number,
  userId: String,
  createdAt: String,
  updatedAt: String,
});

export default mongoose.models.Expense ||
  mongoose.model("Expense", expenseSchema);
