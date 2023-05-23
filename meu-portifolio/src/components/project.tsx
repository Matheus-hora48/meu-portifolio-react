"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../style/project.module.css";
import Phone from "@/components/phone";

interface ProjectSectionProps {
  title: string;
  description: string;
  align: string;
  imageSrc: StaticImageData;
  repoLink: string;
}

function ProjectSection({
  title,
  description,
  align,
  imageSrc,
  repoLink,
}: ProjectSectionProps) {
  const [showModal, setShowModal] = useState(false);

  const paragraphs = description.split("<br>").map((paragraph, index) => (
    <p key={index} className={styles.project_section__description}>
      {paragraph}
    </p>
  ));

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`${styles.project_section} ${
        align === "center" ? styles.left : styles.right
      } `}
    >
      <div className={styles.project_section__left}>
        <div className={styles.project_section__image}>
          <Image src={imageSrc} width={260} height={400} alt={title} />
        </div>

        {showModal && (
          <div className={styles.modal}>
            <div className={styles.modal__content}>
              <h2 className={styles.modal__title}>{title}</h2>
              <Phone />
              <p className={styles.modal__description}>
                Deseja ir para o repositório?
              </p>
              <div className={styles.modal__buttons}>
                <a href={repoLink}>
                  <button className={styles.modal__button}>Repositório</button>
                </a>
                <button
                  className={styles.modal__button_cancel}
                  onClick={closeModal}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.project_section__right}>
        <h2 className={styles.project_section__title}>{title}</h2>
        {paragraphs}
        <button className={styles.project_section__button} onClick={openModal}>
          Ver Mais
        </button>
      </div>
    </div>
  );
}

export default ProjectSection;
