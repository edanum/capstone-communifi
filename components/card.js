import styled from "styled-components";

export default function Card({ children, animation }) {
  return <StyledCard animation={animation}>{children}</StyledCard>;
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

  ${({ animation }) =>
    animation === "slide-left"
      ? `overflow: auto;
  -ms-overflow-style: none;
  animation: 0.2s ease-in-out 0s 1 slideInFromLeft;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }`
      : animation === "slide-bottom"
      ? `overflow: auto;
  -ms-overflow-style: none;
  animation: 0.3s ease-in-out 0s 1 slideInFromBottom ;

  @keyframes slideInFromBottom {
    0% {
      transform: translateY(500%);
    }
    100% {
      transform: translateX(0%);
    }
  }`
      : null}
`;
