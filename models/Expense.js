import mongoose from "mongoose";

const { Schema } = mongoose;

const expenseSchema = new Schema(
  {
    receiptNumber: { type: Number, required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    dateOfSubmit: { type: String, required: true },
    comment: { type: String, required: false },
    receipt: { type: String, required: false },
    name: { type: String, required: true },
    status: { type: String, required: false },
  },
  { timestamps: true }
);

const Expense =
  mongoose.models.Expense || mongoose.model("Expense", expenseSchema);

export default Expense;
