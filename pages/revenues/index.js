import useSWR from "swr";
import RevenueCard from "../../components/revenues/revenueCard";
import styled from "styled-components";
import Link from "next/link";
import AddButton from "../../components/buttons/addButton";
import { sortArrayByReceiptNumber } from "../../library/sortArrayByReceiptNumber";
import { useRef, useEffect } from "react";
import { getLoadingAnimation } from "../../library/getLoadingAnimation";
import { useData } from "../../context/DataContext";

export default function Einnahmen() {
  //GET GLOBAL DATA STATE
  const revenues = useData().filteredRevenues;
  //

  //IMPLEMENT LOADING ANIMATION
  const container = useRef(null);
  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  if (!revenues || revenues === []) return <div ref={container}></div>;
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
