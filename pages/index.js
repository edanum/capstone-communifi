import { useEffect, useRef } from "react";
import WinAndLoss from "../components/dashboard/winAndLoss";
import { getLoadingAnimation } from "../library/getLoadingAnimation";
import { useData } from "../context/DataContext";
import styled from "styled-components";
import ExpensesOverview from "../components/dashboard/yearOverview";
import { getSession } from "next-auth/react";

export default function Home() {
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

  //SHOW LOADING ANIMATION WHILE WAITING ON DATA
  if (!expenses || !revenues)
    return <AnimationContainer ref={container}></AnimationContainer>;
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
  //

  return (
    <DashboardContainer>
      <WinAndLoss
        expenseSum={expenseSum}
        revenueSum={revenueSum}
        result={result}
      />
      <ExpensesOverview expenses={expenses} />
    </DashboardContainer>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

const AnimationContainer = styled.div`
  height: calc(100vh - 140px);
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
