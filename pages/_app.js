import React from "react";
import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/layout";
import { DataProvider } from "../context/DataContext";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>CommuniFI</title>
      </Head>
      <SessionProvider session={session}>
        <DataProvider>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </DataProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
