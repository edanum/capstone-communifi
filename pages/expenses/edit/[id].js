import ExpeneForm from "../../../components/expenses/expenseForm";
import Router from "next/router";
import { getExpenseById } from "../../../services/expenseServices";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const expense = await getExpenseById(id);

  return {
    props: { expense },
  };
}

export default function ExpenseEdit({ expense }) {
 
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
      buttonLabel="bearbeiten"
    />
  );
}
