import ExpeneForm from "../../components/expenses/expenseForm";
import Router from "next/router";

export default function ExpenseAdd() {
  async function onSubmit(formData) {
    try {
      const response = await fetch("/api/expenses", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      Router.push("/expenses");
    } catch (error) {
      console.log(error);
    }
  }

  return <ExpeneForm onSubmit={onSubmit} />;
}
