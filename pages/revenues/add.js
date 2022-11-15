import RevenueForm from "../../components/revenues/revenueForm";
import Router from "next/router";
import { useSession } from "next-auth/react";

export default function RevenueAdd() {
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
      const response = await fetch("/api/revenues", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      Router.push("/revenues");
    } catch (error) {
      console.log(error);
    }
  }

  return <RevenueForm onSubmit={onSubmit} buttonLabel="Einnahme hinzufügen" />;
}
