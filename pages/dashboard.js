import { useEffect, useRef } from "react";
import WinAndLoss from "../components/dashboard/winAndLoss";
import { getLoadingAnimation } from "../library/getLoadingAnimation";
import { useData } from "../context/DataContext";

export default function Dashboard() {
  //GET GLOBAL DATA STATES
  const revenues = useData().revenues;
  const expenses = useData().expenses;
  const mutateExpenses = useData().mutateExpenses;
  const mutateRevenues = useData().mutateRevenues;
  mutateExpenses();
  mutateRevenues();
  //

  //IMPLEMENT LOADING ANIMATION
  const container = useRef(null);
  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  if (!expenses || !revenues) return <div ref={container}></div>;
  //

  //GENERATE FINANCE DATA
  function getSum(array) {
    
    const amounts = array.map((item) => item.amount);
    const sum = amounts.reduce((a, b) => a + b);
    return sum;
  }

  const expenseSum = getSum(expenses);
  const revenueSum = getSum(revenues);
  const result = revenueSum - expenseSum;
  

  return (

    <WinAndLoss
      expenseSum={expenseSum}
      revenueSum={revenueSum}
      result={result}
    />
  );
}
