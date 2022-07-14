import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Ecowiki</title>
      <meta name="description" content="Ecowiki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Ecowiki
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>            
            <Image src="/materials/plastico.png" alt="Plastico Logo" width={100} height={100} />
            <h2>Plástico</h2>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <Image src="/materials/metalAluminio.png" alt="Metal y Aluminio Logo" width={100} height={100} />
            <h2>Metal y Aluminio</h2>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <Image src="/materials/organico.png" alt="Organico Logo" width={100} height={100} />
            <h2>Orgánico</h2>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <Image src="/materials/papelCarton.png" alt="Papel y Carton Logo" width={100} height={100} />
            <h2>Papel y Cartón</h2>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <Image src="/materials/botellaDeAmor.png" alt="Botella de amor Logo" width={100} height={100} />
            <h2>Botella de Amor</h2>
          </a>
          
          <a href="https://nextjs.org/learn" className={styles.card}>
            <Image src="/materials/noSeRecicla.png" alt="No se recicla Logo" width={100} height={100} />
            <h2>No se recicla</h2>
          </a>

        </div>
      </main> 
    </div>
  )
}
