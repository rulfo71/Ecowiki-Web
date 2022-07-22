import styles from "../../styles/MaterialsList.module.css";
import Material from "./Material";
import { listOfMaterials } from "common/constants";

export default function MaterialsList() {
  return (
    <section className={styles.grid}>
      {listOfMaterials.map(([displayName, name]) => (
        <Material key={name} displayName={displayName} name={name} />
      ))}
    </section>
  );
}
