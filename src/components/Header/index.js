import styles from "./Header.module.css";
import Image from "next/image";

export default function header() {
  return (
    <>
      <header className={styles.header}>
        <a href="#"><Image
          src="/logo.webp"
          width={100}
          height={100}
          className={styles.logo}
        />
        </a>
        <ul className={styles.lista}>
          <a href="#pokemons"><li>Pokemon</li></a>
          <a href="#sobre"><li>Pokedex</li></a>
          <a href="#aboutUs"><li>About</li></a>

        </ul>
      </header>
    </>
  );
}
