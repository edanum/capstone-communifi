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
      Ergebnis: (
        getDataSumByMonth(revenues, 1) - getDataSumByMonth(expenses, 1)
      ).toFixed(2),
    },
    {
      name: "Feb",
      Ergebnis: (
        getDataSumByMonth(revenues, 2) - getDataSumByMonth(expenses, 2)
      ).toFixed(2),
    },
    {
      name: "Mar",
      Ergebnis: (
        getDataSumByMonth(revenues, 3) - getDataSumByMonth(expenses, 3)
      ).toFixed(2),
    },
    {
      name: "Apr",
      Ergebnis: (
        getDataSumByMonth(revenues, 4) - getDataSumByMonth(expenses, 4)
      ).toFixed(2),
    },
    {
      name: "Mai",
      Ergebnis: (
        getDataSumByMonth(revenues, 5) - getDataSumByMonth(expenses, 5)
      ).toFixed(2),
    },
    {
      name: "Jun",
      Ergebnis: (
        getDataSumByMonth(revenues, 6) - getDataSumByMonth(expenses, 6)
      ).toFixed(2),
    },
    {
      name: "Jul",
      Ergebnis: getDataSumByMonth(revenues, 7) - getDataSumByMonth(expenses, 7),
    },
    {
      name: "Aug",
      Ergebnis: getDataSumByMonth(revenues, 8) - getDataSumByMonth(expenses, 8),
    },
    {
      name: "Sep",
      Ergebnis: getDataSumByMonth(revenues, 9) - getDataSumByMonth(expenses, 9),
    },
    {
      name: "Oct",
      Ergebnis:
        getDataSumByMonth(revenues, 10).toFixed(2) -
        getDataSumByMonth(expenses, 10).toFixed(2),
    },
    {
      name: "Nov",
      Ergebnis: (
        getDataSumByMonth(revenues, 11) - getDataSumByMonth(expenses, 11)
      ).toFixed(2),
    },
    {
      name: "Dez",
      Ergebnis: (
        getDataSumByMonth(revenues, 12) - getDataSumByMonth(expenses, 12)
      ).toFixed(2),
    },
  ];

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.Ergebnis));
    const dataMin = Math.min(...data.map((i) => i.Ergebnis));

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
      <h3>Ergebnis</h3>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />

          <Tooltip />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="var(--revenues)" stopOpacity={1} />
              <stop offset={off} stopColor="var(--expenses)" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="Ergebnis"
            stroke="var(--background-primary)"
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
