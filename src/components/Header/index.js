import styles from "./Header.module.css";
import Image from "next/image";

export default function header() {
  return (
    <>
      <header className={styles.header}>
        <Image
          src="/logo.webp"
          width={100}
          height={100}
          className={styles.logo}
        />
        <ul className={styles.lista}>
          <li>Pokemons</li>
          <li>Items</li>
          <li>About</li>
        </ul>
      </header>
    </>
  );
}
