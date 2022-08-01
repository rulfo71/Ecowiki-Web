import { materialMapper } from 'common/constants';
import styles from 'styles/ProductsList.module.css';
import Product from './Product';

export default function ProductsList(props) {
  const { products, material } = props;
  const materialPretty = materialMapper[material];
  console.log(products);

  return (
    <>
      <h1>{materialPretty}</h1>
      <section className={styles.grid}>
        {products.length === 0 ? (
          <p> No hay elementos para mostrar</p>
        ) : (
          products.map((product) => (
            <Product
              key={product.displayName}
              id={product.id}
              barcode={product.barcode}
              searchName={product.searchName}
              displayName={product.displayName}
              material={product.material}
              observations={product.observations}
              photoUrl={product.photoUrl}
              score={product.score}
            />
          ))
        )}
      </section>
    </>
  );
}
