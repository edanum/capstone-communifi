import Card from "../card";
import styled from "styled-components";
import WinAndLossChart from "./charts/winAndLossChart";

export default function WinAndLoss({ expenseSum, revenueSum, result }) {
  return (
    <>
      <Card>
        <Heading>
          Gewinn&Verlust:
        </Heading>
        <Amount result={result}>
          {result?.toFixed(2).replace(".", ",")}€{" "}
        </Amount>
        <SummaryContainer>
          <Summary>
            <p>Einnahmen:</p>
            <p> {revenueSum?.toFixed(2).replace(".", ",")}€</p>
          </Summary>
          <Summary>
            <p>Ausgaben:</p>
            <p> -{expenseSum?.toFixed(2).replace(".", ",")}€</p>
          </Summary>
        </SummaryContainer>
        <WinAndLossChart expenseSum={expenseSum} revenueSum={revenueSum} />
      </Card>
    </>
  );
}

const Amount = styled.p`
  margin: 10px 0px;
  font-size: 2rem;
  color: ${(props) => (props.result < 0 ? "var(--expenses)" : "var(--revenues)")};
`;
const Heading = styled.h2`
  margin: 0px;
  color: var(--headline);
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  align-items: center;
  width: 100%;
`;

const SummaryContainer = styled.div`
  display: flex;

  justify-content: space-between;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 20px;
  padding: 0px 20px;
`;


