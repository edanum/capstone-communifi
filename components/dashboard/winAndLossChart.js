import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import Card from "../card";
import { useData } from "../../context/DataContext";
import styled from "styled-components";

export default function WinAndLossChart({ expenseSum, revenueSum }) {
  const data = [
    {
      name: "",
      Einnahmen: revenueSum,
      Ausgaben: -expenseSum,
    },
    // {
    //   name: "Page B",
    //   GuV: -3000,
    // },
  ];

  return (
    
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="Einnahmen" fill="#82ca9d" />
          <Bar dataKey="Ausgaben" fill="#c8331c" />
        </BarChart>
      </ResponsiveContainer>
    
  );
}

const Box = styled.div`
  margin-top: 20px;
  display: flex;
  width: 300px;
  height: 200px;
  justify-content: flex-start;
`;
