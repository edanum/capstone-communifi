import Card from "../card";
import { useData } from "../../context/DataContext";
import ExpensesTimeChart from "./charts/expensesTimeChart";
import ResultLine from "./charts/resultLine";
import styled from "styled-components";

export default function ExpensesOverview() {
  const expenses = useData().expenses;
  const revenues = useData().revenues;

  return (
    <Card>
      <Box>
        <h2>Jahresübersicht</h2>
        <ExpensesTimeChart expenses={expenses} />
        <ResultLine />
      </Box>
    </Card>
  );
}
 
const Box = styled.div`
  display:flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-bottom: 10px;

`;