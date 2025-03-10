import styles from "./Card.module.css";
import Image from "next/image";

export default function card() {
  return (
    <div className={styles.containerCard}>
      <h2>Slowpoke</h2>
      <Image src="/slowpoke.png" width={150} height={150} />
      <p>
        Pokemon da primeira gen, tipo psiquico meio ruinzinho pra falar a
        verdade, mas bem amado pela comunidade e preguiçoso
      </p>
      <button className={styles.btnCard}>Slowpoke</button>
    </div>
  );
}
