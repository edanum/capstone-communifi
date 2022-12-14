import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

export default function WinAndLossChart({ expenseSum, revenueSum }) {
  const data = [
    {
      name: "Einnahmen&Ausnahmen gesamt",
      Einnahmen: revenueSum.toFixed(2),
      Ausgaben: -expenseSum.toFixed(2),
    },
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
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="Einnahmen" fill="var(--revenues)" />
        <Bar dataKey="Ausgaben" fill="var(--expenses)" />
      </BarChart>
    </ResponsiveContainer>
  );
}
