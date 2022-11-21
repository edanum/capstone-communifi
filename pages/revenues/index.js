import RevenueCard from "../../components/revenues/revenueCard";
import styled from "styled-components";
import Link from "next/link";
import AddButton from "../../components/buttons/addButton";
import { useRef, useEffect } from "react";
import { getLoadingAnimation } from "../../library/getLoadingAnimation";
import { useData } from "../../context/DataContext";
import { getSession } from "next-auth/react";

export default function Einnahmen() {
  //GET GLOBAL DATA STATE
  const revenues = useData().filteredRevenues;
  const mutateRevenues = useData().mutateRevenues;
  mutateRevenues(); // refreshes cache to synchronyze with globald state after add function
  //


  //IMPLEMENT LOADING ANIMATION
  const container = useRef(null);
  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  if (!revenues || revenues === [])
    return <AnimationContainer ref={container}></AnimationContainer>;
  //

  return (
    <>
      <StyledRevenues>
        {revenues?.map((revenue) => {
          return <RevenueCard key={revenue.id} revenue={revenue} />;
        })}
      </StyledRevenues>
      <Link href="/revenues/add">
        <a>
          <AddButton />
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

const StyledRevenues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
