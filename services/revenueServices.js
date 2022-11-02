import Revenue from "../models/Revenue";
import today from "../library/today";
import { highestReceiptNumber } from "../library/highestReceiptNumber";

export async function getAllRevenues() {
  // await dbConnect();
  const revenues = await Revenue.find();
  const mappedRevenues = revenues.map(
    ({
      id,
      receiptNumber,
      amount,
      description,
      dateOfSubmit,
      comment,
      receipt,
      name,
    }) => ({
      id,
      receiptNumber,
      amount,
      description,
      dateOfSubmit,
      comment,
      receipt,
      name,
    })
  );
  return mappedRevenues;
}

export async function getRevenueById(revenueId) {
  // await dbConnect();

  const revenue = await Revenue.findById(revenueId);

  const {
    id,
    receiptNumber,
    amount,
    description,
    dateOfSubmit,
    comment,
    receipt,
    name,
  } = revenue;
  return {
    id,
    receiptNumber,
    amount,
    description,
    dateOfSubmit,
    comment,
    receipt,
    name,
  };
}

export async function addRevenue(revenue) {
  const revenues = await getAllRevenues();

  const newRevenue = await Revenue.create({
    receiptNumber: highestReceiptNumber(revenues) + 1,
    amount: revenue.amount,
    description: revenue.description,
    dateOfSubmit: today(),
    comment: revenue.comment,
    receipt: revenue.receipt,
    name: "Marc Becker",
  });

  return newRevenue;
}
