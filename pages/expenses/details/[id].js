import ExpenseDetail from "../../../components/expenses/expenseDetail";
import styled from "styled-components";
import Link from "next/link";
import EditButton from "../../../components/buttons/editButton";
import { getLoadingAnimation } from "../../../library/getLoadingAnimation";
import { useEffect, useRef, useState } from "react";

export default function ExpenseDetails() {
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
    fetch(`/api/expenses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <div ref={container}></div>;
  if (!data) return <div ref={container}></div>;
  //

  const expense = data;

  return (
    <>
      <StyledExpenseDetails>
        <ExpenseDetail expense={expense} />
      </StyledExpenseDetails>
      <Link href={`/expenses/edit/${expense.id}`}>
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
