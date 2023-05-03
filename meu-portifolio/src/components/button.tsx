"use client";
import { useState } from "react";
import about from "../style/about.module.css";

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleClick = (buttonText: string) => {
    setSelectedButton(buttonText);
  };

  return (
    <div className={`${about.right_box} ${about.button_group}`}>
      <div className={about.button_container}>
        <button
          className={`${about.button} ${about.left_button} ${
            selectedButton === "Experiência" ? about.selected_button : ""
          }`}
          onClick={() => handleClick("Experiência")}
          disabled={selectedButton === "Experiência"}
        >
          Experiência
        </button>
        <button
          className={`${about.button} ${about.right_button} ${
            selectedButton === "Educação" ? about.selected_button : ""
          }`}
          onClick={() => handleClick("Educação")}
          disabled={selectedButton === "Educação"}
        >
          Educação
        </button>
      </div>
      <div className={about.content_container}>
        {selectedButton === "Experiência" && (
          <p className={about.content_text}>
            Top Soft Informática - ago de 2021 - O momento Barreiras, Bahia,
            Brazil <br /> <br />
            Minha jornada começou como um especialista em correção de bugs e
            implementação de recursos em aplicativos ERP mobile. Agora, estou
            trabalhando em um projeto incrível de plataforma cruzada usando Node
            e Flutter. Minha missão é coletar dados da API Node e transformá-los
            em insights incríveis com o Flutter.
            <br />
            Recentemente, criei um Dashboard que fornece informações valiosas
            sobre os produtos vendidos, transformando dados complexos em uma
            visualização atraente e fácil de entender. Sou obcecado em
            transformar soluções tecnológicas em experiências incríveis para os
            usuários.
            <br />
            Se você procura alguém apaixonado por tecnologia, inovação e
            criatividade, pode contar comigo. Estou sempre em busca de novos
            desafios e oportunidades para aprimorar minhas habilidades e criar
            soluções ainda mais impressionantes.
          </p>
        )}
        {selectedButton === "Educação" && (
          <p className={about.content_text}>Aqui vem o texto da Educação</p>
        )}
      </div>
    </div>
  );
};

export default ButtonGroup;
