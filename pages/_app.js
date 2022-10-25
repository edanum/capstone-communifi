import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
