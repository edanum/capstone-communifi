import ExpeneForm from "../../components/expenses/expenseForm";
import Router from "next/router";
import { getSession } from "next-auth/react";

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
  return <ExpeneForm onSubmit={onSubmit} buttonLabel="Ausgabe hinzufügen" />;
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: session,
  };
}
