import ExpenseDetail from "../../../components/expenses/expenseDetail";
import styled from "styled-components";
import Link from "next/link";
import EditButton from "../../../components/buttons/editButton";
import useSWR from "swr";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

const fetcher = async () => {
  const pathArray = window.location.pathname.split("/");
  const id = pathArray[3];
  const response = await fetch(`/api/expenses/${id}`);
  const data = await response.json();
  return data;
};

export default function ExpenseDetails() {
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
  const { data, error } = useSWR("expensedetail", fetcher);
  if (error) return "An error has occured";
  if (!data) return "loading";
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
