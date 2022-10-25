import Head from "next/head";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <>
      <Head>
        <title>CommuniFI</title>
      </Head>
      <div>Home</div>
    </>
  );
}

const Main = styled.main`
  text-align: center;
`;
