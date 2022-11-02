import RevenueDetail from "../../../components/revenues/revenueDetail";
import styled from "styled-components";
import Link from "next/link";
import { getLoadingAnimation } from "../../../library/getLoadingAnimation";
import EditButton from "../../../components/buttons/editButton";

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

  if (isLoading) return <div ref={container}></div>;
  if (!data) return <div ref={container}></div>;
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

const StyledRevenueDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
