import useSWR from "swr";
import ExpenseCard from "../../components/expenses/expenseCard";
import styled from "styled-components";
import Link from "next/link";
import AddButton from "../../components/buttons/addButton";
import { sortArrayByReceiptNumber } from "../../library/sortArrayByReceiptNumber";
import { useRef, useEffect } from "react";
import { getLoadingAnimation } from "../../library/getLoadingAnimation";
import { useData } from "../../context/DataContext";

export default function Einnahmen() {
  //GET GLOBAL DATA STATE

  const expenses = useData().filteredExpenses;
  //IMPLEMENT LOADING ANIMATION
  const container = useRef(null);
  useEffect(() => {
    getLoadingAnimation(container);
  }, []);

  //

  sortArrayByReceiptNumber(expenses, "decending");

  return (
    <>
      {typeof expenses === "undefined" ? (
        <div ref={container}></div>
      ) : (
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
      )}
    </>
  );
}

const StyledExpenses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
