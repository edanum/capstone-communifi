import { useEffect, useState, useRef } from "react";
import useSWR from "swr";
import WinAndLoss from "../components/dashboard/winAndLoss";
import { getLoadingAnimation } from "../library/getLoadingAnimation";

const expenseFetcher = async () => {
  const response = await fetch("/api/expenses");
  const data = await response.json();
  return data;
};

const revenueFetcher = async () => {
  const response = await fetch("/api/revenues");
  const data = await response.json();
  return data;
};

export default function Dashboard() {
  //PREPARE LOTTIE ANIMATION (LOADING)
  const container = useRef(null);
  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  //

  //GET DATA VIA SWR
  const { data: expenseData, error: expenseError } = useSWR(
    "expenses",
    expenseFetcher
  );
  const { data: revenueData, error: revenueError } = useSWR(
    "revenues",
    revenueFetcher
  );

  if (expenseError || revenueError) return "An error has occured";
  if (!expenseData || !revenueData) return <div ref={container}></div>;
  //

  //GENERATE FINANCE DATE
  function getSum(array) {
    let sum = 0;
    const amounts = array.map((item) => item.amount);

    amounts.forEach((amount) => (sum = sum + amount));
    return sum;
  }

  const expenseSum = getSum(expenseData);
  const revenueSum = getSum(revenueData);
  const result = revenueSum - expenseSum;
  //

  return (
    <WinAndLoss
      expenseSum={expenseSum}
      revenueSum={revenueSum}
      result={result}
    />
  );
}
