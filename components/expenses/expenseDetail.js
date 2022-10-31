import styled from "styled-components";
import Image from "next/image";

export default function ExpenseDetail({ expense }) {
  return (
    <>
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
    </>
  );
}

const Amount = styled.h2`
  font-size: 1.5rem;
  margin: 0px;
`;

const Card = styled.article`
  background-color: #f9f1f1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background: #f9f1f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
`;

const CardDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  margin: 20px;
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
  margin: 0px;
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
