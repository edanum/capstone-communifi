import React from "react";
import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/layout";
import { DataProvider } from "../context/DataContext";


function MyApp({ Component, pageProps }) {



  return (
    <>
      <DataProvider>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
    </DataProvider>
    </>
    
  );
}

export default MyApp;
