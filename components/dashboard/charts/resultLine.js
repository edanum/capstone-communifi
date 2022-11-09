import { useData } from "../../../context/DataContext";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { getDataSumByMonth } from "../../../library/dataAnalytics/getDataSumByMonth";

export default function ResultLine() {
  const expenses = useData().expenses;
  const revenues = useData().revenues;

     const data = [
       {
         name: "Jan",
         result: getDataSumByMonth(revenues, 1) - getDataSumByMonth(expenses, 1),
       },
       {
         name: "Feb",
         result: getDataSumByMonth(revenues, 2) - getDataSumByMonth(expenses, 2),
       },
       {
         name: "Mar",
         result: getDataSumByMonth(revenues, 3) - getDataSumByMonth(expenses, 3),
       },
       {
         name: "Apr",
         result: getDataSumByMonth(revenues, 4) - getDataSumByMonth(expenses, 4),
       },
       {
         name: "Mai",
         result: getDataSumByMonth(revenues, 5) - getDataSumByMonth(expenses, 5),
       },
       {
         name: "Jun",
         result: getDataSumByMonth(revenues, 6) - getDataSumByMonth(expenses, 6),
       },
       {
         name: "Jul",
         result: getDataSumByMonth(revenues, 7) - getDataSumByMonth(expenses, 7),
       },
       {
         name: "Aug",
         result: getDataSumByMonth(revenues, 8) - getDataSumByMonth(expenses, 8),
       },
       {
         name: "Sep",
         result: getDataSumByMonth(revenues, 9) - getDataSumByMonth(expenses, 9),
       },
       {
         name: "Oct",
         result: getDataSumByMonth(revenues, 10) - getDataSumByMonth(expenses, 10),
       },
       {
         name: "Nov",
         result: getDataSumByMonth(revenues, 11) - getDataSumByMonth(expenses, 11),
       },
       {
         name: "Dez",
         result: getDataSumByMonth(revenues, 12) - getDataSumByMonth(expenses, 12),
       },
     ];


  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.result));
    const dataMin = Math.min(...data.map((i) => i.result));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();
  return (
    <Box>
      <div>Ergebnis</div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
         
          <Tooltip />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="result"
            stroke="#000"
            fill="url(#splitColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 300px;
`;
