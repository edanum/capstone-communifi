import styled from "styled-components";
import Image from "next/image";
import Card from "../card";

export default function ExpenseDetail({ expense }) {
  return (
    <Card>
      <CardHeader>#{expense.receiptNumber}</CardHeader>
      <Amount>{expense.amount.toFixed(2).replace(".", ",")}€</Amount>
      <Description>{expense.description}</Description>
      {expense.receipt === "" ? (
        ""
      ) : (
        <Receipt>
          <Image
            src={expense.receipt}
            layout="fill"
            objectFit="contain"
            alt="receipt image"
          />
        </Receipt>
      )}

      <CardDetailContainer>
        <Date>
          <ToBold>Eingereicht am:</ToBold>
          {expense.dateOfSubmit}
        </Date>
        <Name>
          <ToBold>Eingereicht von:</ToBold>
          {expense.name}
        </Name>
        <Comment>
          <ToBold>Kommentar:</ToBold>
          {expense.comment}
        </Comment>
      </CardDetailContainer>
    </Card>
  );
}

const Amount = styled.h2`
  font-size: 1.5rem;
  margin: 0px;
  width: 100%;
  text-align: center;
`;

const CardDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
`;

const CardHeader = styled.section`
  width: 100%;
  font-size: 0.8rem;
`;

const Comment = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  justify-content: space-between;
  font-size: 0.8rem;
  margin: 0px;
  word-wrap: break-word;
`;

const Date = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  margin: 0px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  margin: 15px 0px;
  word-wrap: break-word;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  margin: 0px;
`;

const Receipt = styled.div`
  display: ${(props) => (props.receipt === "" ? "none" : "flex")};
  justify-content: center;
  position: relative;
  width: 100%;
  height: 300px;
`;

const ToBold = styled.p`
  font-weight: bold;
  margin: 0px;
`;
