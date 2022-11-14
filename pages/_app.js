import React from "react";
import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/layout";
import { DataProvider } from "../context/DataContext";
import { SessionProvider } from "next-auth/react";


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
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
