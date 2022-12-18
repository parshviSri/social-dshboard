import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Introduction from './components/landing-page/introduction';
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className="bg-[#D1BAFE]">
      <Head>
        <title>Social Dshboard</title>
        <meta
          name="description"
          content="platform for all the social media content"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className='my-8'>
          <Introduction />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
