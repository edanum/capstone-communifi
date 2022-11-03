import React from "react";
import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/layout";
import { useState } from "react";
import { DataProvider } from "../context/DataContext";

function MyApp({ Component, pageProps }) {
  const [expenses, setExpenses] = useState(["test"]);

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
