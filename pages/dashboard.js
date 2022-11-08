import { useEffect, useRef } from "react";
import WinAndLoss from "../components/dashboard/winAndLoss";
import { getLoadingAnimation } from "../library/getLoadingAnimation";
import { useData } from "../context/DataContext";
import StatusOverview from "../components/dashboard/statusOverview";
import styled from "styled-components";

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
    <DashboardContainer>
      <WinAndLoss
        expenseSum={expenseSum}
        revenueSum={revenueSum}
        result={result}
      />
      <StatusOverview expenses={expenses} />
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 20px;
`