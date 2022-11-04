import styled from "styled-components";
import Link from "next/link";
import Card from "../card";

export default function RevenueCard({ revenue }) {
  return (
    <Link href={"/revenues/details/" + revenue.id}>
      <a>
        <Card>
          <CardHeader>#{revenue.receiptNumber}</CardHeader>
          <Amount>{revenue?.amount?.toFixed(2).replace(".", ",")}€</Amount>
          <Description>{revenue.description}</Description>

          <CardFooter>
            <Date>{revenue.dateOfSubmit}</Date>
            <Name>{revenue.name}</Name>
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
}

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
