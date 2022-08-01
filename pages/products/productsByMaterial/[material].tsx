import { Constants } from 'common/constants';
import ProductsList from 'components/Products/ProductsList';
import Head from 'next/head';
import styles from 'styles/Product.module.css';
import Navbar from '../../../components/Navbar';

export default function ProductsByMaterial({ productsList, material }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Plastico - Ecowiki</title>
        <meta name='description' content='Ecowiki' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <ProductsList products={productsList} material={material} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const material = context.params.material;
  
  const res = await fetch(
    `${Constants.Backend.url}/products/getProductsByMaterial/${material}`
  );
  let productsList = {};

  if (res) {
    productsList = await res.json();
  }

  return {
    props: {
      productsList,      
      material
    },
  };
}
