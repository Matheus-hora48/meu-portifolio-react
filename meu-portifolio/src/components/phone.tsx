"use-client";
import { useState } from "react";
import styles from "../style/phone.module.css";
// import Slider from "react-slick";
import SetaDireita from "../../public/seta-direita.png";
import SetaEsquerda from "../../public/seta-esquerda.png";
import Image from "next/image";

interface Imagens {
  src: string;
}

export default function Phone() {
  const Imagens: Array<Imagens> = [
    {
      src: "https://img.freepik.com/fotos-gratis/close-de-um-filhote-de-cachorro-golden-retriever-fofo-isolado-em-uma-superficie-branca_181624-40949.jpg",
    },
    {
      src: "https://img.freepik.com/fotos-gratis/em-fuga-o-cachorrinho-maltipu-esta-posando_155003-22631.jpg?w=2000",
    },
  ];

  const [indiceAtual, setIndiceAtual] = useState<number>(0);
  const handlePreviousClick = () => {
    setIndiceAtual(indiceAtual === 0 ? Imagens.length - 1 : indiceAtual - 1);
  };

  const handleNextClick = () => {
    setIndiceAtual(indiceAtual === Imagens.length - 1 ? 0 : indiceAtual + 1);
  };

  return (
    <div className={styles.iphone}>
      <div className={styles.header}>
        <div className={styles.camera}></div>
        <div className={styles.speaker}></div>
        <div className={styles.sensors}></div>
      </div>
      <div className={styles.screen}>
        <img
          className={styles.screen_img}
          src={Imagens[indiceAtual].src}
          alt="Slide 1"
        />
      </div>
      <Image
        className={styles.arrow_right}
        src={SetaDireita}
        onClick={handleNextClick}
        alt="Slide 1"
      />
      <Image
        className={styles.arrow_left}
        src={SetaEsquerda}
        onClick={handlePreviousClick}
        alt="Slide 1"
      />
      <div className={styles.homeButton}></div>
    </div>
  );
}
