import RevenueForm from "../../components/revenues/revenueForm";
import Router from "next/router";
import { getSession} from "next-auth/react";

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

  return <RevenueForm onSubmit={onSubmit} buttonLabel="Einnahme hinzufügen" />;
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