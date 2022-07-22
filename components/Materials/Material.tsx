import Image from "next/image";
import styles from "../../styles/Material.module.css";

export default function Material({ displayName, name }) {
  const imageSrc = `/materials/${name}.png`;
  const imageAlt = `${displayName} logo`;

  return (
    <a href="https://nextjs.org/docs" className={styles.material}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
      </div>
      <h2>{displayName}</h2>
    </a>
  );
}
