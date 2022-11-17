import Revenue from "../models/Revenue";
import today from "../library/today";
import { highestReceiptNumber } from "../library/highestReceiptNumber";
import { getUserByEmail } from "./userServices";

export async function getAllRevenues() {
  // await dbConnect();

  const revenues = await Revenue.find().populate("name");
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
      name: { name: name.name, id: name._id },
    })
  );
  return mappedRevenues;
}

export async function getRevenueById(revenueId) {
  const revenue = await Revenue.findById(revenueId).populate("name");

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
    name: { name: name.name, id: name._id },
  };
}

export async function addRevenue(revenue) {
  const revenues = await getAllRevenues();
  const userName = await getUserByEmail(revenue.user.email);
  const newRevenue = await Revenue.create({
    receiptNumber: highestReceiptNumber(revenues) + 1,
    amount: revenue.amount,
    description: revenue.description,
    dateOfSubmit: today(),
    comment: revenue.comment,
    receipt: revenue.receipt,
    name: userName._id,
  });

  return newRevenue;
}
