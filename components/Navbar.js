import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Header.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.a}>
          <div className={styles.imageWrapper}>
            <Image
              src="/icono18x27.png"
              alt="Plastico Logo"
              className={styles.imageLogo}
              width={40}
              height={40}
            />
          </div>
          <h2>Ecowiki</h2>
        </a>
      </Link>
    </header>
  );
}
