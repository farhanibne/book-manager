import Head from 'next/head'
import '../styles/globals.css'
import '../styles/a.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head >
      <title>Library Manager</title>
      <link rel="icon" href="/dz.png" />
    </Head>
    
    <Component {...pageProps} />
  </>

  
  )
}

export default MyApp
