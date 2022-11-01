import RevenueForm from "../../components/revenues/revenueForm";
import Router from "next/router";

export default function RevenueAdd() {
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

  return <RevenueForm onSubmit={onSubmit} buttonLabel="Einnahme hinzufügen"/>;
}
