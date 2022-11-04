import styled from "styled-components";
import Router from "next/router";

export default function SkipButton() {
  return (
    <StyledSkipButton onClick={() => Router.push("/dashboard")}>
      Skip (just for fishes)
    </StyledSkipButton>
  );
}

const StyledSkipButton = styled.button`
  margin-top: 30px;
  height: 40px;
`;
