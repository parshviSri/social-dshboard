import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Contact from './components/Contact';
import Bottom from './components/landing-page/bottom';
import CenterEle from './components/landing-page/center';
import Introduction from './components/landing-page/introduction';
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Social Dshboard</title>
        <meta
          name="description"
          content="platform for all the social media content"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="my-8">
          <Introduction />
        </div>
        <div className="my-8">
          <CenterEle />
        </div>
        <div className="my-8">
          <Bottom/>
        </div>
      </main>

     <Contact/>
    </div>
  );
}
