import useSWR from "swr";
import RevenueCard from "../../components/revenues/revenueCard";
import styled from "styled-components";
import Link from "next/link";
import AddButton from "../../components/buttons/addButton";
import { sortArrayByReceiptNumber } from "../../library/sortArrayByReceiptNumber";
import { useRef, useEffect, useState } from "react";
import { getLoadingAnimation } from "../../library/getLoadingAnimation";


const fetcher = async () => {
  const response = await fetch("/api/revenues");
  const data = await response.json();
  return data;
};

export default function Einnahmen() {
  //PREPARE LOTTIE ANIMATION (LOADING)
  const container = useRef(null);

  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  //

  //GET DATA VIA SWR
  const { data, error } = useSWR("revenues", fetcher);
  if (error) return "An error has occured";
  if (!data) return <div ref={container}></div>;
  const revenues = data;
  //

  sortArrayByReceiptNumber(revenues, "decending");

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

const StyledRevenues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
