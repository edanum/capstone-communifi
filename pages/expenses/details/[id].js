import ExpenseDetail from "../../../components/expenses/expenseDetail";
import styled from "styled-components";
import Link from "next/link";
import EditButton from "../../../components/buttons/editButton";
import { getLoadingAnimation } from "../../../library/getLoadingAnimation";
import { useEffect, useRef, useState } from "react";
import { useSession, getSession } from "next-auth/react";
import Router from "next/router";

export default function ExpenseDetails() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  //PREPARE LOTTIE ANIMATION (LOADING)
  const container = useRef(null);
  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  //

  //GET DATA VIA USEEFFECT FETCH
  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const id = pathArray[3];
    setLoading(true);
    fetch(`/api/expenses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return <AnimationContainer ref={container}></AnimationContainer>;
  if (!data) return <AnimationContainer ref={container}></AnimationContainer>;
  //

  const expense = data;

  return (
    <>
      <StyledExpenseDetails>
        <ExpenseDetail expense={expense} />
      </StyledExpenseDetails>
      <Link href={`/expenses/edit/${expense.id}`}>
        <a>
          <EditButton />
        </a>
      </Link>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: session,
  };
}

const AnimationContainer = styled.div`
  height: calc(100vh - 140px);
`;

const StyledExpenseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
