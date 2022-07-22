import Head from 'next/head';
import styles from 'styles/Product.module.css';
import Navbar from '../../components/Navbar';
import ProductsList from 'components/Products/ProductsList';

export default function ProductsByMaterial() {
  // TODO: Remove hardcode
  const material = 'Plastico';
  return (
    <div className={styles.container}>
      <Head>
        <title>{material} - Ecowiki</title>
        <meta name='description' content='Ecowiki' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <ProductsList />
      </main>
    </div>
  );
}
