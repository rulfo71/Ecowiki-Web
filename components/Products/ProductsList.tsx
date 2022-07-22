import Image from "next/image";
import { Product } from "interfaces/product";
import styles from 'styles/Product.module.css';

const listOfProducts: Product[] = [
    {
        id: "1",
        barcode: "7792360072447",
        searchName: "nugaton",
        displayName: "Nugaton1",
        material: "Plástico",
        observations: "observación",
        photoUrl: "https://firebasestorage.googleapis.com/v0/b/reciclarte-63ba5.appspot.com/o/products%2Fd8188a59-7cf9-4ed1-96ad-d2d73c687255?alt=media&token=f8171877-34ee-4029-b837-0fb9296a7fdd",
        score: 1
    },
    {
        id: "2",
        barcode: "7792360072447",
        searchName: "nugaton",
        displayName: "Nugaton2",
        material: "Plástico",
        observations: "observación",
        photoUrl: "https://firebasestorage.googleapis.com/v0/b/reciclarte-63ba5.appspot.com/o/products%2Fd8188a59-7cf9-4ed1-96ad-d2d73c687255?alt=media&token=f8171877-34ee-4029-b837-0fb9296a7fdd",
        score: 1
    },
    {
        id: "3",
        barcode: "7792360072447",
        searchName: "nugaton",
        displayName: "Nugaton3",
        material: "Plástico",
        observations: "observación",
        photoUrl: "https://firebasestorage.googleapis.com/v0/b/reciclarte-63ba5.appspot.com/o/products%2Fd8188a59-7cf9-4ed1-96ad-d2d73c687255?alt=media&token=f8171877-34ee-4029-b837-0fb9296a7fdd",
        score: 1
    },
    {
        id: "4",
        barcode: "7792360072447",
        searchName: "nugaton",
        displayName: "Nugaton4",
        material: "Plástico",
        observations: "observación",
        photoUrl: "https://firebasestorage.googleapis.com/v0/b/reciclarte-63ba5.appspot.com/o/products%2Fd8188a59-7cf9-4ed1-96ad-d2d73c687255?alt=media&token=f8171877-34ee-4029-b837-0fb9296a7fdd",
        score: 1
    }
  ];

export default function ProductsList () {
    return (
    <section className={styles.grid}>
        {listOfProducts.map((product) => (
            <section key={product.id} className={styles.product}>
                <div>
                    <Image src={product.photoUrl} className={styles.image} alt={product.displayName} width={100} height={100} />
                </div>
                <div>
                    {product.barcode}
                </div>
                <div>
                    {product.displayName}
                </div>
                <div>
                    {product.material}
                </div>
                <div>
                    {product.observations}
                </div>

            </section>
        ))}
    </section>
    )
  }