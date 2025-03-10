import styles from "./Contact.module.css";
import Image from "next/image";

export default function contacts() {
  return (
    <div className={styles.contact}>
      <div className={styles.logotipo}>
        <Image
          src="/logo.webp"
          width={150}
          height={150}
          className={styles.logo}
        />
        <h3>Gotta catch 'em all</h3>
      </div>
      <div className={styles.aboutUs}>
        <h2>Sobre nós</h2>
        <ul>
            <li>Como usar a pokedex</li>
            <li>criador da Pokedex</li>
            <li>Parcerias</li>
        </ul>
      </div>
      <div className={styles.contactUs}>
        <h2>Contatos</h2>
        <ul>
            <li>Endereço</li>
            <li>Telefone</li>
            <li>E-mail</li>
        </ul>
      </div>
      <div className={styles.social}>
        <h2>Sociais</h2>
        <ul>
            <li>PokeZap</li>
            <li>UnovaTalk</li>
            <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
}
