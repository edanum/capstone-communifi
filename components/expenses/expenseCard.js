import styled from "styled-components";

export default function ExpenseCard({ expense }) {
  return (
      <Card>
        <CardHeader>#{expense.receiptNumber}</CardHeader>
        <Amount>{expense.amount}€</Amount>
        <Description>{expense.description}</Description>

        <CardFooter>
          <Date>{expense.dateOfSubmit}</Date>
          <Name>{expense.name}</Name>
        </CardFooter>
      </Card>
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
`;

const Amount = styled.h2`
  font-size: 1.5rem;
  margin: 0px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 0px;
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
