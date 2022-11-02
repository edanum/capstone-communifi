import mongoose from "mongoose";

const { Schema } = mongoose;

const revenueSchema = new Schema(
  {
    receiptNumber: { type: Number, required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    dateOfSubmit: { type: String, required: true },
    comment: { type: String, required: false },
    receipt: { type: String, required: false },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const Revenue =
  mongoose.models.Revenue || mongoose.model("Revenue", revenueSchema);

export default Revenue;
