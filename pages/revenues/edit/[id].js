import RevenueForm from "../../../components/revenues/revenueForm";
import Router from "next/router";
import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function RevenueEdit() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../public/loading_animation.json"),
    });
  }, []);

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
