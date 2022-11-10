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
      Ausgaben: -getDataSumByMonth(expenses, 1),
      Einnahmen: getDataSumByMonth(revenues, 1),
    },
    {
      name: "Feb",
      Ausgaben: -getDataSumByMonth(expenses, 2),
      Einnahmen: getDataSumByMonth(revenues, 2),
    },
    {
      name: "Mar",
      Ausgaben: -getDataSumByMonth(expenses, 3),
      Einnahmen: getDataSumByMonth(revenues, 3),
    },
    {
      name: "Apr",
      Ausgaben: -getDataSumByMonth(expenses, 4),
      Einnahmen: getDataSumByMonth(revenues, 4),
    },
    {
      name: "Mai",
      Ausgaben: -getDataSumByMonth(expenses, 5),
      Einnahmen: getDataSumByMonth(revenues, 5),
    },
    {
      name: "Jun",
      Ausgaben: -getDataSumByMonth(expenses, 6),
      Einnahmen: getDataSumByMonth(revenues, 6),
    },
    {
      name: "Jul",
      Ausgaben: -getDataSumByMonth(expenses, 7),
      Einnahmen: getDataSumByMonth(revenues, 7),
    },
    {
      name: "Aug",
      Ausgaben: -getDataSumByMonth(expenses, 8),
      Einnahmen: getDataSumByMonth(revenues, 8),
    },
    {
      name: "Sep",
      Ausgaben: -getDataSumByMonth(expenses, 9),
      Einnahmen: getDataSumByMonth(revenues, 9),
    },
    {
      name: "Oct",
      Ausgaben: -getDataSumByMonth(expenses, 10),
      Einnahmen: getDataSumByMonth(revenues, 10),
    },
    {
      name: "Nov",
      Ausgaben: -getDataSumByMonth(expenses, 11),
      Einnahmen: getDataSumByMonth(revenues, 11),
    },
    {
      name: "Dez",
      Ausgaben: -getDataSumByMonth(expenses, 12),
      Einnahmen: getDataSumByMonth(revenues, 12),
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
