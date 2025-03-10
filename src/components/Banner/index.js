import styles from "./Banner.module.css";

export default function about() {
  return (
    <div className={styles.banner}>
      <img src="/banner.jpg" />
      <p>Diversos magikarps avistados no rio Juqueriquerê, fotografia tirada pelo Raoni "Goticula" Aguiar.</p>
    </div>
  );
}
