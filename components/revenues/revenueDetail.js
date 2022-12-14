import styled from "styled-components";
import Image from "next/image";
import Card from "../card";
import Link from "next/link";

export default function RevenueDetail({ revenue }) {
  return (
    <>
      <Card>
        <CardHeader>#{revenue.receiptNumber}</CardHeader>
        <Amount>{revenue.amount.toFixed(2).replace(".", ",")}€</Amount>
        <Description>{revenue.description}</Description>
        {revenue.receipt === "" ? null : (
          <Receipt>
            <Image
              src={revenue.receipt}
              layout="fill"
              objectFit="contain"
              alt="receipt image"
            />
          </Receipt>
        )}

        <CardDetailContainer>
          <Date>
            <ToBold>Eingereicht am:</ToBold>
            {revenue.dateOfSubmit}
          </Date>
          <Name>
            <ToBold>Eingereicht von:</ToBold>
            <Link href={`/profile/details/${revenue.name.id}`}>
              <Box> {revenue.name.name}</Box>
            </Link>
          </Name>
          {revenue.comment ? (
            <Comment>
              <ToBold>Kommentar:</ToBold>
              {revenue.comment}
            </Comment>
          ) : null}
        </CardDetailContainer>
      </Card>
    </>
  );
}

const Amount = styled.h2`
  font-size: 1.5rem;
  margin: 0px;
  width: 100%;
  text-align: center;
  color: var(--card-heading);
`;

const Box = styled.div`
  background-color: var(--button);
  padding: 2px 5px;
  border-radius: 5px;
  color: var(--button-text);
`;

const CardDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 20px;
  width: 100%;

  p,
  div,
  section {
    font-size: 0.9rem;
  }
`;

const CardHeader = styled.section`
  width: 100%;
  font-size: 0.9rem;
`;

const Comment = styled.section`
  width: 100%;
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
  color: var(--card-heading);
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
