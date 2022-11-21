import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import { useRouter } from "next/router";
import GlobalStyle from "./GlobalStyle";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <>
      {
      pathname === "/login" ||
      pathname === "/register" ? null : (
        <Header />
      )}
      <Main>{children}</Main>
      {
      pathname === "/login" ||
      pathname.includes("edit") ||
      pathname.includes("add") ||
      pathname === "/register" ? null : (
        <Footer />
      )}
    </>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -1;
  top: 52.2px;
  padding: 20px 20px 150px 20px;
`;
