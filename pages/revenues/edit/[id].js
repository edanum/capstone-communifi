import RevenueForm from "../../../components/revenues/revenueForm";
import Router from "next/router";
import { useState, useEffect, useRef } from "react";
import { getLoadingAnimation } from "../../../library/getLoadingAnimation";
import { getSession } from "next-auth/react";

export default function RevenueEdit() {
  //PREPARE LOTTIE ANIMATION (LOADING)
  const container = useRef(null);
  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  //

  //GET DATA VIA USEEFFECT FETCH
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const id = pathArray[3];
    setLoading(true);
    fetch(`/api/revenues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <div ref={container}></div>;
  if (!data) <div ref={container}></div>;
  //

  const revenue = data;

  async function onSubmit(formData) {
    try {
      const response = await fetch(`/api/revenues/${revenue.id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
      });
      await response.json();
      Router.push(`/revenues/details/${revenue.id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <RevenueForm
      onSubmit={onSubmit}
      revenue={revenue}
      buttonLabel="Änderungen speichern"
    />
  );
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
