import ExpeneForm from "../../../components/expenses/expenseForm";
import Router from "next/router";
import { useState, useEffect } from "react";

export default function ExpenseEdit() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const id = pathArray[3];
    setLoading(true);
    fetch(`/api/expenses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <div></div>;
  if (!data) return <div></div>;

  const expense = data;

  async function onSubmit(formData) {
    try {
      const response = await fetch(`/api/expenses/${expense.id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
      });
      await response.json();
      Router.push(`/expenses/details/${expense.id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ExpeneForm
      onSubmit={onSubmit}
      expense={expense}
      buttonLabel="Änderungen speichern"
    />
  );
}
