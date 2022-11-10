import useSWR, { mutate } from "swr";
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
  const mutateExpenses = useData().mutateExpenses;

  mutateExpenses(); // refreshes cache to synchronyze with globald state after add function
  // //IMPLEMENT LOADING ANIMATION
  const container = useRef(null);
  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  if (!expenses || expenses === [])
    return <Animation ref={container}></Animation>;
  //

  return (
    <>
      <>
        <StyledExpenses>
          {expenses?.map((expense) => {
            return <ExpenseCard key={expense.id} expense={expense} />;
          })}
        </StyledExpenses>
        <></>
        <Link href="/expenses/add">
          <a>
            <AddButton />
          </a>
        </Link>
      </>
    </>
  );
}

const StyledExpenses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Animation = styled.div`
  position: relative;
  top: 50vh;
`;
