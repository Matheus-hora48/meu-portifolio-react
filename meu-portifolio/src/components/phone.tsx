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
      src: "../../public/projeto1/11.png",
    },
    {
      src: "../../public/projeto1/12.png",
    },
    {
      src: "../../public/projeto1/13.png",
    },
    {
      src: "../../public/projeto1/14.png",
    },
    {
      src: "../../public/projeto1/15.png",
    },
    {
      src: "../../public/projeto1/16.png",
    },
    {
      src: "../../public/projeto1/17.png",
    },
    {
      src: "../../public/projeto1/18.png",
    },
    {
      src: "../../public/projeto1/19.png",
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
