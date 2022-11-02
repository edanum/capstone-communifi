import styled from "styled-components";

export default function Card({ children}) {
    
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
}

const StyledCard = styled.article`
  background-color: var(--background-secondary);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  width: 100%;
`;