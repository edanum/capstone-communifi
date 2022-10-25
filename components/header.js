import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <Title>CommuniFI</Title>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  background-color: #cfd6de;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: 0px 20px;
`;

const Title = styled.h1`
  font-size: 21px;
`;
