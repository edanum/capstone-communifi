import useSWR from "swr";
import RevenueCard from "../../components/revenues/revenueCard";
import styled from "styled-components";
import Link from "next/link";
import AddButton from "../../components/buttons/addButton";
import { sortArrayByReceiptNumber } from "../../library/sortArrayByReceiptNumber";
import { useRef, useEffect, useState } from "react";
import lottie from "lottie-web";

export default function Ausgaben() {
  const container = useRef(null);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/loading_animation.json"),
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("/api/revenues")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <div ref={container}></div>;
  if (!data) return <div ref={container}></div>;
  const revenues = data;

  sortArrayByReceiptNumber(revenues, "decending");

  return (
    <>
      <StyledExpenses>
        {revenues?.map((revenue) => {
          return <RevenueCard key={revenue.id} revenue={revenue} />;
        })}
      </StyledExpenses>
      <Link href="/revenues/add">
        <a>
          <AddButton />
        </a>
      </Link>
    </>
  );
}

const StyledExpenses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
