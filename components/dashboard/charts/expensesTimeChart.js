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
      expenses: -getDataSumByMonth(expenses, 1),
      revenues: getDataSumByMonth(revenues, 1),
    },
    {
      name: "Feb",
      expenses: -getDataSumByMonth(expenses, 2),
      revenues: getDataSumByMonth(revenues, 2),
    },
    {
      name: "Mar",
      expenses: -getDataSumByMonth(expenses, 3),
      revenues: getDataSumByMonth(revenues, 3),
    },
    {
      name: "Apr",
      expenses: -getDataSumByMonth(expenses, 4),
      revenues: getDataSumByMonth(revenues, 4),
    },
    {
      name: "Mai",
      expenses: -getDataSumByMonth(expenses, 5),
      revenues: getDataSumByMonth(revenues, 5),
    },
    {
      name: "Jun",
      expenses: -getDataSumByMonth(expenses, 6),
      revenues: getDataSumByMonth(revenues, 6),
    },
    {
      name: "Jul",
      expenses: -getDataSumByMonth(expenses, 7),
      revenues: getDataSumByMonth(revenues, 7),
    },
    {
      name: "Aug",
      expenses: -getDataSumByMonth(expenses, 8),
      revenues: getDataSumByMonth(revenues, 8),
    },
    {
      name: "Sep",
      expenses: -getDataSumByMonth(expenses, 9),
      revenues: getDataSumByMonth(revenues, 9),
    },
    {
      name: "Oct",
      expenses: -getDataSumByMonth(expenses, 10),
      revenues: getDataSumByMonth(revenues, 10),
    },
    {
      name: "Nov",
      expenses: -getDataSumByMonth(expenses, 11),
      revenues: getDataSumByMonth(revenues, 11),
    },
    {
      name: "Dez",
      expenses: -getDataSumByMonth(expenses, 12),
      revenues: getDataSumByMonth(revenues, 12),
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
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="expenses" fill="#fd7769" stackId="stack" />
          <Bar dataKey="revenues" fill="#73ac67" stackId="stack" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 300px;
 
`;
