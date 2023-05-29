"use-client";
import { useState } from "react";
import styles from "../style/phone.module.css";
// import Slider from "react-slick";
import SetaDireita from "../../public/seta-direita.png";
import SetaEsquerda from "../../public/seta-esquerda.png";
import foto1 from "../../public/projeto1/11.png";
import foto2 from "../../public/projeto1/12.png";
import foto3 from "../../public/projeto1/13.png";
import foto4 from "../../public/projeto1/14.png";
import Image from "next/image";

export default function Phone() {
  const Imagens = [foto1, foto2, foto3, foto4];
  const [indiceAtual, setIndiceAtual] = useState<number>(0);
  const handlePreviousClick = () => {
    setIndiceAtual(indiceAtual === 0 ? Imagens.length - 1 : indiceAtual - 1);
  };

  const handleNextClick = () => {
    setIndiceAtual(indiceAtual === Imagens.length - 1 ? 0 : indiceAtual + 1);
  };

  return (
    <div className={styles.iphone}>
      <div className={styles.images}>
        <Image
          className={styles.screen_img}
          src={Imagens[indiceAtual]}
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
