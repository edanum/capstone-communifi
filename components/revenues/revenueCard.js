import styled from "styled-components";
import Link from "next/link";

export default function RevenueCard({ revenue }) {
  return (
    <Link href={"/revenues/details/" + revenue.id}>
      <Card>
        <CardHeader>#{revenue.receiptNumber}</CardHeader>
        <Amount>{revenue.amount.toFixed(2).replace(".", ",")}€</Amount>
        <Description>{revenue.description}</Description>

        <CardFooter>
          <Date>{revenue.dateOfSubmit}</Date>
          <Name>{revenue.name}</Name>
        </CardFooter>
      </Card>
    </Link>
  );
}

const Card = styled.article`
  background-color: #f9f1f1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  background: #f9f1f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;

  &:hover {
    cursor: pointer;
  }
`;

const Amount = styled.h2`
  font-size: 1.5rem;
  margin: 0px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 0px;
  width: 100%;
  word-wrap: break-word;
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

const CardHeader = styled.div`
  font-size: 0.8rem;
  margin-bottom: 15px;
`;

const CardFooter = styled.div`
  margin: 20px;
`;
