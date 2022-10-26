import { Decimal128, Int32 } from "bson";
import mongoose from "mongoose";

const { Schema } = mongoose;

const expenseSchema = new Schema({
  receiptNumber: { type: Number, rquired: true },
  amount: { type: Number, rquired: true },
  description: { type: String, rquired: true },
  dateOfSubmit: { type: String, rquired: true },
  comment: { type: String, rquired: false },
  receipt: { type: String, rquired: false },
  name: { type: String, rquired: true },
});

const Expense =
  mongoose.models.Expense || mongoose.model("Expense", expenseSchema);

export default Expense;
