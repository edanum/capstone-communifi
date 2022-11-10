import styled from "styled-components";

export default function Logo({fontSize}) {
  
    return (
    <StyledLogo fontSize={fontSize}>
      Communi<ToColor>FI</ToColor>
    </StyledLogo>
  );
}

const StyledLogo = styled.section`
  display: flex;
  justify-content: center;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  color: var(--headline)
  
`;

const ToColor = styled.p`
  color: var(--accent-color);
  margin: 0px;
`;
