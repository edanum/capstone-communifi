import useSWR from "swr";
import ExpenseCard from "../../components/expenses/expenseCard";
import styled from "styled-components";
import Link from "next/link";
import AddButton from "../../components/buttons/addButton";
import { sortArrayByReceiptNumber } from "../../library/sortArrayByReceiptNumber";
import { useRef, useEffect } from "react";
import lottie from "lottie-web"

const fetcher = async () => {
  const response = await fetch("/api/expenses");
  const data = await response.json();
  return data;
};

export default function Einnahmen() {
 const container = useRef(null);

 useEffect(() => {
   lottie.loadAnimation({
     container: container.current,
     render: "svg",
     loop: true,
     autoplay: true,
     animationData: require("../../public/loading_animation.json"),
   });
 }, []);

  const { data, error } = useSWR("expenses", fetcher);
  if (error) return "An error has occured";
  if (!data) return (<div ref={container}></div>);
  const expenses = data;

 

  sortArrayByReceiptNumber(expenses, "decending");

  return (
    <>
      <StyledExpenses>
        {expenses?.map((expense) => {
          return <ExpenseCard key={expense.id} expense={expense} />;
        })}
      </StyledExpenses>
      <Link href="/expenses/add">
        <a>
          <AddButton />
        </a>
      </Link>
    </>
  );
}

const StyledExpenses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
