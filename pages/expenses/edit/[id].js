import ExpeneForm from "../../../components/expenses/expenseForm";
import Router from "next/router";
import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function ExpenseEdit() {
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
    fetch(`/api/expenses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <div ref={container}></div>;
  if (!data) <div ref={container}></div>;

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
