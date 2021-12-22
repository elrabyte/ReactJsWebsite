import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/fontawesome/all.min.js";

import { useEffect } from "react";
import Layout from "../comps/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout>
      <Head>
        <title>Test</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
