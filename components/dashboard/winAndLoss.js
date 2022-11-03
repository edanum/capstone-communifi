import Card from "../card";
import styled from "styled-components";

export default function WinAndLoss({ expenseSum, revenueSum, result }) {
  return (
    <Card>
      <Heading>Gewinn&Verlust:</Heading>
      <Amount result={result}>{result?.toFixed(2).replace(".", ",")}€ </Amount>
      <SummaryContainer>
        <Summary>
          <p>Einnahmen:</p>
          <p> {revenueSum?.toFixed(2).replace(".", ",")}€</p>
        </Summary>
        <Summary>
          <p>Ausgaben:</p>
          <p> {expenseSum?.toFixed(2).replace(".", ",")}€</p>
        </Summary>
      </SummaryContainer>
    </Card>
  );
}

const Amount = styled.p`
  margin: 10px 0px;
  font-size: 2rem;
  color: ${(props) => (props.result < 0 ? "red" : "green")};
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

const SummaryContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  font-size: 1rem;
  width: 100%;
`;

const Heading = styled.p`
  margin: 0px;
  font-size: 1.1rem;
`;
