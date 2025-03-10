import styles from "./About.module.css";
import Image from "next/image";

export default function about() {
  return (
    <div id="sobre" className={styles.about}>
      <h2>Aprenda tudo sobre seus pokemons favoritos!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
        Nulla facilisi. Curabitur ac felis arcu. Sed vehicula, urna eget aliquam
        placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
        Integer nec bibendum lorem. Suspendisse potenti. Fusce sit amet urna a
        arcu fermentum euismod. Donec ac felis nec libero ultricies tincidunt.
        Nam at orci non nulla tincidunt tincidunt. Proin ac libero nec lorem
        tincidunt tincidunt. Donec vel sapien ut libero venenatis faucibus.
        Nullam ut magna non ligula fermentum bibendum.
      </p>
      <div className={styles.grid}>
        <div>
          <img src="/clodsire.avif" />
        </div>
        <div>
          <h2>Pokedex</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada. Nulla facilisi. Curabitur ac felis arcu. Sed vehicula,
            urna eget aliquam placerat, purus leo tincidunt eros, eget luctus
            quam orci in velit.
          </p>
        </div>
        <div>
          <h2>Pokedex</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada. Nulla facilisi. Curabitur ac felis arcu. Sed vehicula,
            urna eget aliquam placerat, purus leo tincidunt eros, eget luctus
            quam orci in velit.
          </p>
        </div>
        <div>
        <img src="/seal.jpg" />
        </div>
      </div>
    </div>
  );
}
