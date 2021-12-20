import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/fontawesome/all.min.js"

import { useEffect } from "react";
import Layout from '../comps/layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
