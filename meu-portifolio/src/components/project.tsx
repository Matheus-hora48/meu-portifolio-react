import Image, { StaticImageData } from "next/image";
import styles from "../style/project.module.css";

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
  const paragraphs = description.split("<br>").map((paragraph, index) => (
    <p key={index} className={styles.project_section__description}>
      {paragraph}
    </p>
  ));
  return (
    <div className={`${styles.project_section} ${align === 'center' ? styles.left : styles.right} `}>
      <div className={styles.project_section__left}>
        <div className={styles.project_section__image}>
          <Image src={imageSrc} width={170} height={170} alt={title} />
        </div>
        <a href={repoLink}>
          <button className={styles.project_section__button}>
            Repositório
          </button>
        </a>
      </div>
      <div className={styles.project_section__right}>
        <h2 className={styles.project_section__title}>{title}</h2>
        {paragraphs}
      </div>
    </div>
  );
}

export default ProjectSection;
