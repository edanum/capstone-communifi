import Head from "next/head";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState({ data: "" });

  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch("/api/data-for-react");
      const data = await response.json();
      setState(data);
    }
  }, []);

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
