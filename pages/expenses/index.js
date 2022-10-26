import Link from "next/link";
import styled from "styled-components";
import { getAllExpenses } from "../../services/expenseServices";
import ExpenseCard from "../../components/expenses/expenseCard";
import AddButton from "../../components/buttons/addButton";

export async function getServerSideProps() {
  const expenseData = await getAllExpenses();

  return {
    props: { expenseData },
  };
}

export default function Ausgaben({ expenseData }) {
  const expenses = expenseData;

  return (
    <>
      <StyledExpenses>
        {expenses.map((expense) => {
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
