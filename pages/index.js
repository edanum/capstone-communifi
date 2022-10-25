import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>CommuniFI</title>
      </Head>
      <div>
        Welcome to CommuniFI! This is an MVP holding a minimum of functions of
        the app. Please use the navbar to navigate to the first page "expenses".
      </div>
    </>
  );
}

const Main = styled.main`
  text-align: center;
`;
