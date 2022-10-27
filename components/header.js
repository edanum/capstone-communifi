import styled from "styled-components";
import { useRouter } from "next/router";
import Router from "next/router";
import backButton from "../public/back_button.svg";
import Image from "next/image";

export default function Header() {
  const { pathname } = useRouter();

  function printSubhead(pathname) {
    console.log(pathname.includes("/expenses/details/"));

    switch (pathname) {
      case "/":
        return "Dashboard";
      case "/expenses":
        return "Ausgaben";
      case "/expenses/add":
        return "Ausgabe hinzufügen";
      case "/expenses/details/":
        return "Ausgabendetails";
      case "/revenues":
        return "Einnahmen";
      case "/profile":
        return "Profil";
    }

    if (pathname.includes("/expenses/details/")) {
      return "Ausgabendetails";
    }
  }

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
