import Head from 'next/head';
import styles from 'styles/Home.module.css';
import Navbar from '../components/Navbar';
import MaterialsList from 'components/Materials/MaterialsList';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecowiki</title>
        <meta name='description' content='Ecowiki' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <MaterialsList />
      </main>
    </div>
  );
}
