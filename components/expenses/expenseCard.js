import styled from "styled-components";
import Link from "next/link";
import Card from "../card";
import StatusSection from "./statusSection";

export default function ExpenseCard({ expense }) {
  return (
    <Link href={"/expenses/details/" + expense.id}>
      <a>
        <Card animation={"slide-left"}>
          <CardHeader>
            <p>#{expense.receiptNumber}</p>
            <StatusSection status={expense.status} />
          </CardHeader>
          <Amount>{expense?.amount?.toFixed(2).replace(".", ",")}€</Amount>
          <Description>{expense.description}</Description>

          <CardFooter>
            <Date>{expense.dateOfSubmit}</Date>
            <Name>{expense.name}</Name>
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
}

const Amount = styled.h2`
  font-size: 1.5rem;
  margin: 0px;
  color: var(--card-heading);
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 15px;
`;

const CardFooter = styled.div`
  margin: 20px;
`;

const Description = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  margin: 0px;
  width: 100%;
  word-wrap: break-word;
  color: var(--card-heading);
`;

const Date = styled.p`
  position: absolute;
  font-size: 0.8rem;
  margin: 0px;
  left: 15px;
  bottom: 15px;
`;

const Name = styled.p`
  position: absolute;
  font-size: 0.8rem;
  margin: 0px;
  right: 15px;
  bottom: 15px;
`;

