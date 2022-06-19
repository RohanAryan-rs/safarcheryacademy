import 'styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}


export default MyApp
