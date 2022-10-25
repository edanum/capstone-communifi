import { promises } from "fs";

export async function getAllExpenses() {
  const data = await promises.readFile("data/expenses.json", "utf-8");
  return JSON.parse(data);
}

