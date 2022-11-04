import styled from "styled-components";

export default function StatusSection({ status }) {
  return (
    <StyledStatusSection>
      <StatusIdicator status={status} />
      <p>{status}</p>
    </StyledStatusSection>
  );
}

const StatusIdicator = styled.div`
  display: ${({ status }) => !status && "none"};
  background-color: ${({ status }) =>
    status === "Eingereicht" ? "orange" : "green"};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const StyledStatusSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
