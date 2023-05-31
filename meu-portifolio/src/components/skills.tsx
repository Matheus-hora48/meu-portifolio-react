import styles from "../style/skills.module.css";
import flutterSvg from "../../public/tech/flutter.svg";
import Image from "next/image";

import jsIcon from "../../public/tech/javascript.svg";
import tyIcon from "../../public/tech/typescript.svg";
import nextjsIcon from "../../public/tech/nextjs.svg";
import nodejsIcon from "../../public/tech/nodejs.svg";
import androidIcon from "../../public/tech/android.svg";
import kotlinIcon from "../../public/tech/kotlin.svg";
import htmlIcon from "../../public/tech/html.svg";
import cssIcon from "../../public/tech/css.svg";
import pgIcon from "../../public/tech/pg.svg";
import mysqlIcon from "../../public/tech/mysql.svg";
import mariaIcon from "../../public/tech/mariadb.svg";
import firebaseIcon from "../../public/tech/firebase.svg";
import gitIcon from "../../public/tech/git.svg";

function SkillsSection() {
  return (
    <div className={styles.skills}>
      <h2>Skills e Frameworks</h2>
      <div className={styles.iconRow}>
        <Image src={flutterSvg} width={50} height={50} alt="Flutter" />
        <Image src={jsIcon} width={50} height={50} alt="JavaScript" />
        <Image src={tyIcon} width={50} height={50} alt="TypeScipt" />
        <Image src={nextjsIcon} width={50} height={50} alt="Next.js" />
        <Image src={nodejsIcon} width={50} height={50} alt="Node.js" />
        <Image src={androidIcon} width={50} height={50} alt="Android" />
        <Image src={kotlinIcon} width={50} height={50} alt="Kotlin" />
        <Image src={htmlIcon} width={50} height={50} alt="HTML" />
        <Image src={cssIcon} width={50} height={50} alt="Css" />
        <Image src={pgIcon} width={50} height={50} alt="Postgress" />
        <Image src={mysqlIcon} width={50} height={50} alt="Mysql" />
        <Image src={mariaIcon} width={50} height={50} alt="MariaDB" />
        <Image src={firebaseIcon} width={50} height={50} alt="Firebase" />
        <Image src={gitIcon} width={50} height={50} alt="Git" />
      </div>
    </div>
  );
}

export default SkillsSection;
