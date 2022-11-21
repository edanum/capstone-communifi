import RevenueDetail from "../../../components/revenues/revenueDetail";
import styled from "styled-components";
import Link from "next/link";
import { getLoadingAnimation } from "../../../library/getLoadingAnimation";
import EditButton from "../../../components/buttons/editButton";
import { getSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

export default function RevenueDetails() {
  //PREPARE LOTTIE ANIMATION (LOADING)
  const container = useRef(null);

  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  //

  //GET DATA VIA USEEFFECT FETCH
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const id = pathArray[3];
    setLoading(true);
    fetch(`/api/revenues/${id}`)
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

  const revenue = data;

  return (
    <>
      <StyledRevenueDetails>
        <RevenueDetail revenue={revenue} />
      </StyledRevenueDetails>
      <Link href={`/revenues/edit/${revenue.id}`}>
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

const StyledRevenueDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
