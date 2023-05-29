"use-client";
import { useState } from "react";
import styles from "../style/phone.module.css";
// import Slider from "react-slick";
import SetaDireita from "../../public/seta-direita.png";
import SetaEsquerda from "../../public/seta-esquerda.png";

import Image from "next/image";
import PropTypes from "prop-types";

export default function Phone({ imagens }) {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const handlePreviousClick = () => {
    setIndiceAtual(indiceAtual === 0 ? imagens.length - 1 : indiceAtual - 1);
  };

  const handleNextClick = () => {
    setIndiceAtual(indiceAtual === imagens.length - 1 ? 0 : indiceAtual + 1);
  };

  return (
    <div className={styles.iphone}>
      <div className={styles.images}>
        <Image
          className={styles.screen_img}
          src={imagens[indiceAtual]}
          alt="Slide 1"
        />
        <div className={styles.seta}>
          <Image
            className={styles.arrow_left}
            src={SetaEsquerda}
            onClick={handlePreviousClick}
            alt="Slide 1"
          />
          <Image
            className={styles.arrow_right}
            src={SetaDireita}
            onClick={handleNextClick}
            alt="Slide 1"
          />
        </div>
      </div>
    </div>
  );
}

Phone.propTypes = {
  imagens: PropTypes.arrayOf(PropTypes.string).isRequired,
};
