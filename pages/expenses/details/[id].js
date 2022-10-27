import ExpenseDetail from "../../../components/expenses/expenseDetail";
import styled from "styled-components";
import { getExpenseById } from "../../../services/expenseServices";

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  const expense = await getExpenseById(id);

  return {
    props: { expense },
  };
}

export default function ExpenseDetails({ expense }) {
  return (
    <StyledExpenseDetails>
      <ExpenseDetail expense={expense} />
    </StyledExpenseDetails>
  );
}

const StyledExpenseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
