import ExpenseCard from "../../components/expenses/expenseCard";
import styled from "styled-components";
import Link from "next/link";
import AddButton from "../../components/buttons/addButton";
import Router from "next/router";
import { useRef, useEffect } from "react";
import { getLoadingAnimation } from "../../library/getLoadingAnimation";
import { useData } from "../../context/DataContext";
import { useSession } from "next-auth/react";

export default function Einnahmen() {
  //GET GLOBAL DATA STATE
  const expenses = useData().filteredExpenses;
  const mutateExpenses = useData().mutateExpenses;
  mutateExpenses(); // refreshes cache to synchronyze with globald state after add function
  //

  //PROTECT PAGE
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      Router.push("/login");
    },
  });

  //

  //IMPLEMENT LOADING ANIMATION
  const container = useRef(null);
  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  if (!expenses || expenses === [])
    return <AnimationContainer ref={container}></AnimationContainer>;
  //

 if (status === "loading") {
   //BREAKPOINT FOR PROTECTED PAGE
   return null;
 }
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

const AnimationContainer = styled.div`
  height: calc(100vh - 140px);
`;

const StyledExpenses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
