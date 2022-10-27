import styled from "styled-components";
import { useRouter } from "next/router";
import Router from "next/router";
import backButton from "../public/back_button.svg";
import Image from "next/image";
import { printSubhead } from "../library/printSubhead";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      {pathname === "/" ||
      pathname === "/expenses" ||
      pathname === "/revenues" ||
      pathname === "/profile" ? (
        <>
          <Title>CommuniFI</Title> <SubTitle>{printSubhead(pathname)}</SubTitle>
        </>
      ) : (
        <>
          <Image
            onClick={() => Router.back()}
            src={backButton}
            width={50}
            height={50}
          />
          <SubTitle>{printSubhead(pathname)}</SubTitle>
        </>
      )}
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
  padding: 0px 20px 0px 20px;
`;

const Title = styled.h1`
  font-size: 21px;
`;
const SubTitle = styled.p`
  font-size: 18px;
`;
