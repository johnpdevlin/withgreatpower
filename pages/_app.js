import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css'

import React, {useEffect} from 'react'
import Head from 'next/head';
import Layout from '../components/universal/Layout'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);

  return (
  <>
     <Head>
    
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  );
}

export default MyApp
