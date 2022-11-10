import styled from "styled-components";

export default function Button({label, onClick}) {
    return <StyledButton onClick={onClick}>{label}</StyledButton>;
}

const StyledButton = styled.button`
  margin-top: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: var(--button);
  border: none;
  height: 40px;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  cursor: pointer;
`