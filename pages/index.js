import Head from 'next/head';
import Main from 'pages/home';
export default function Home() {
  
  return (
    <>
      <Head>
        <title>SAF Archery Academy | Kanpur Archery Academy</title>
        <meta name="description" content="saf archery academy|kanpur archery academy|archery academy|sports academy we are provides good sports knowledge and practice,sports academy in kanpur nagar uttar pradesh india,it is sport academy in kanpur and lucknow" />
        <meta name="keywords" content="saf archery academy|kanpur archery academy|archery academy|sports academy we are provides good sports knowledge and practice,sports academy in kanpur nagar uttar pradesh india,it is sport academy in kanpur and lucknow" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <script src='https://unpkg.com/aos@2.3.1/dist/aos.js'>
        </script>
      </Head>  
      <Main/>
    </>
  )
}
