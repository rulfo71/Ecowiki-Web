import { materialMapper } from 'common/constants';
import Image from 'next/image';
import styles from 'styles/Product.module.css';

export default function Product({
  id,
  barcode,
  searchName,
  displayName,
  material,
  observations,
  photoUrl,
  score,
}) {
  return (
    <section key={id} className={styles.product}>
      <div className={styles.imageWrapper}>
        <Image
          src={photoUrl}
          className={styles.image}
          alt={displayName}
          width={100}
          height={100}
        />
      </div>
      {barcode && (
        <div>
          <p className={styles.title}>CÓDIGO DE BARRAS</p>
          <p className={styles.data}>{barcode}</p>
        </div>
      )}
      {displayName && (
        <div>
          <p className={styles.title}>NOMBRE</p>
          <p className={styles.data}>{displayName}</p>
        </div>
      )}
      {material && (
        <div>
          <p className={styles.title}>CONTENEDOR</p>
          <p className={styles.data}>{materialMapper[material]}</p>
        </div>
      )}
      {observations && (
        <div>
          <p className={styles.title}>OBSERVACIONES</p>
          <p className={styles.data}>{observations}</p>
        </div>
      )}
    </section>
  );
}
