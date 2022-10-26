import { Decimal128, Int32 } from "bson";
import mongoose from "mongoose";

const { Schema } = mongoose;

const expenseSchema = new Schema({
  receiptNumber: { type: String, rquired: true },
  amount: { type: String, rquired: true },
  description: { type: String, rquired: true },
  dateOfSubmit: { type: String, rquired: true },
  comment: { type: String, rquired: false },
  receipt: { type: String, rquired: false },
});

const Expense =
  mongoose.models.Expense || mongoose.model("finance.expenses", expenseSchema);

export default Expense;
