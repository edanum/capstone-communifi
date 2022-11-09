import Card from "../../card";
import { useData } from "../../../context/DataContext";
import ExpensesTimeChart from "../charts/expensesTimeChart";

export default function ExpensesOverview() {
  const expenses = useData().expenses
  const revenues = useData().revenues
  
  
 


  return (
    <Card>
      <b>Jahresübersicht</b>
      <ExpensesTimeChart expenses={expenses}/>
    </Card>
  );
}
