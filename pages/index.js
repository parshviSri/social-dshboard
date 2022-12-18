import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social Dshboard</title>
        <meta name="description" content="platform for all the social media content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <Navbar/>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
