import styled from "styled-components";

export default function Card({ children}) {
    
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
}

const StyledCard = styled.article`
  background-color: var(--card-background);
  color: var(--card-paragraph);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  border: solid 1px var(--border);
  border-radius: 7px;
  width: 100%;
`;