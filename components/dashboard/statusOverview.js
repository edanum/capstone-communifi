import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import Card from "../card";

export default function StatusOverview({ expenses }) {
  
    const numberExpensesBezahlt = expenses.filter(
    (e) => e.status === "Bezahlt"
    ).length;
  
  const numberExpensesEingereicht = expenses.filter(
    (e) => e.status === "Eingereicht"
  ).length;
  console.log(numberExpensesBezahlt);
  console.log(numberExpensesEingereicht);
  const data01 = [
    { name: "Bezahlt", value: numberExpensesBezahlt },
    { name: "Eingereicht", value: numberExpensesEingereicht },
   
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    
  ];

  return (
    <Card>
      <b>Statusübersicht:</b>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart width={400} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}

const Box = styled.div`
  margin-top: 0px;
  display: flex;
  width: 300px;
  height: 200px;
  justify-content: flex-start;
`;
