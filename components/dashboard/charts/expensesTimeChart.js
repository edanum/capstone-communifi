import React, { PureComponent } from "react";
import { getDataSumByMonth } from "../../../library/dataAnalytics/getDataSumByMonth";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../../../context/DataContext";
import styled from "styled-components";

export default function ExpensesTimeChart() {
  const expenses = useData().expenses;
  const revenues = useData().revenues;

  const data = [
    {
      name: "Jan",
      Einnahmen: getDataSumByMonth(revenues, 1),
      Ausgaben: -getDataSumByMonth(expenses, 1),
    },
    {
      name: "Feb",
      Einnahmen: getDataSumByMonth(revenues, 2),
      Ausgaben: -getDataSumByMonth(expenses, 2),
    },
    {
      name: "Mar",
      Einnahmen: getDataSumByMonth(revenues, 3),
      Ausgaben: -getDataSumByMonth(expenses, 3),
    },
    {
      name: "Apr",
      Einnahmen: getDataSumByMonth(revenues, 4),
      Ausgaben: -getDataSumByMonth(expenses, 4),
    },
    {
      name: "Mai",
      Einnahmen: getDataSumByMonth(revenues, 5),
      Ausgaben: -getDataSumByMonth(expenses, 5),
    },
    {
      name: "Jun",
      Einnahmen: getDataSumByMonth(revenues, 6),
      Ausgaben: -getDataSumByMonth(expenses, 6),
    },
    {
      name: "Jul",
      Einnahmen: getDataSumByMonth(revenues, 7),
      Ausgaben: -getDataSumByMonth(expenses, 7),
    },
    {
      name: "Aug",
      Einnahmen: getDataSumByMonth(revenues, 8),
      Ausgaben: -getDataSumByMonth(expenses, 8),
    },
    {
      name: "Sep",
      Einnahmen: getDataSumByMonth(revenues, 9),
      Ausgaben: -getDataSumByMonth(expenses, 9),
    },
    {
      name: "Oct",
      Einnahmen: getDataSumByMonth(revenues, 10),
      Ausgaben: -getDataSumByMonth(expenses, 10),
    },
    {
      name: "Nov",
      Einnahmen: getDataSumByMonth(revenues, 11),
      Ausgaben: -getDataSumByMonth(expenses, 11),
    },
    {
      name: "Dez",
      Einnahmen: getDataSumByMonth(revenues, 12),
      Ausgaben: -getDataSumByMonth(expenses, 12),
    },
  ];

  return (
    <Box>
      <h3>Einnahmen vs. Ausgaben</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          stackOffset="sign"
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" color="#000" />
          <Tooltip />
          <ReferenceLine y={0} stroke="var(--heading)" />
          <Bar dataKey="Ausgaben" fill="var(--expenses)" stackId="stack" />
          <Bar dataKey="Einnahmen" fill="var(--revenues)" stackId="stack" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 300px;
`;
