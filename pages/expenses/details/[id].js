import ExpenseDetail from "../../../components/expenses/expenseDetail";
import styled from "styled-components";
import Link from "next/link";
import EditButton from "../../../components/buttons/editButton";
import useSWR from "swr";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";

const fetcher = async () => {
  const pathArray = window.location.pathname.split("/");
  const id = pathArray[3];
  const response = await fetch(`/api/expenses/${id}`);
  const data = await response.json();
  return data;
};

export default function ExpenseDetails() {
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
  //Loading Data via SWR

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
  if (!data) return <div ref={container}></div>;

  const expense = data;

  return (
    <>
      <StyledExpenseDetails>
        <ExpenseDetail expense={expense} />
      </StyledExpenseDetails>
      <Link href={"/expenses/edit/" + expense.id}>
        <a>
          <EditButton />
        </a>
      </Link>
    </>
  );
}

const StyledExpenseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
