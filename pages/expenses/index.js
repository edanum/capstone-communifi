import useSWR from "swr";
import ExpenseCard from "../../components/expenses/expenseCard";
import styled from "styled-components";
import Link from "next/link";
import AddButton from "../../components/buttons/addButton";
import { sortArrayByReceiptNumber } from "../../library/sortArrayByReceiptNumber";
import { useRef, useEffect, useState } from "react";
import { getLoadingAnimation } from "../../library/getLoadingAnimation";
import SearchBar from "../../components/searchBar";

const fetcher = async () => {
  const response = await fetch("/api/expenses");
  const data = await response.json();
  return data;
};

export default function Einnahmen() {
  const [expenses, setExpenses] = useState([]);

  //PREPARE LOTTIE ANIMATION (LOADING)
  const container = useRef(null);

  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  //

  useEffect(() => {
    setExpenses(data)
  },[data])

  //GET DATA VIA SWR
  const { data, error } = useSWR("expenses", fetcher);
  if (error) return "An error has occured";
  if (!data) return <div ref={container}></div>;
  setExpenses(data);

  sortArrayByReceiptNumber(expenses, "decending");

  return (
    <>
      <StyledExpenses>
        <SearchBar data={expenses} setData={setExpenses}  />
        {expenses?.map((expense) => {
          return <ExpenseCard key={expense.id} expense={expense} />;
        })}
      </StyledExpenses>
      <Link href="/expenses/add">
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
