import ExpeneForm from "../../components/expenses/expenseForm";
import Router from "next/router";
import { useSession } from "next-auth/react";

export default function ExpenseAdd() {
  //PROTECT PAGE
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      Router.push("/login");
    },
  });

  if (status === "loading") {
    return null;
  }
  //
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

  return <ExpeneForm onSubmit={onSubmit} buttonLabel="Ausgabe hinzufügen" />;
}
