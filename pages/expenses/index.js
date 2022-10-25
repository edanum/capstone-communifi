import styled from "styled-components";
import { getAllExpenses } from "../../services/expenseServices";
import ExpenseCard from "../../components/Expenses/expenseCard";


export async function getServerSideProps() {
  const expenseData = await getAllExpenses();

  return {
    props: { expenseData },
  };
}


export default function Ausgaben({ expenseData }) {
    const expenses = expenseData;


  return (
    <StyledExpenses>
      {expenses.map((expense) => {
        return <ExpenseCard key={expense.id} expense={expense} />;
      })}
    </StyledExpenses>
  );
}

const StyledExpenses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const AddButton = styled.div`
  position: fixed;
  z-index: 2;
  background-color: #64a1e8;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 58px;
  border-radius: 50%;
  right: 15px;
  top: 560px;
`;
