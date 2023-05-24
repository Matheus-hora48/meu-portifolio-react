import styles from "../style/skills.module.css";
import flutterSvg from "../../public/tech/flutter.svg";
import Image from "next/image";

// import htmlIcon from "../public/tech/html.svg";
// import cssIcon from "../public/tech/css.svg";
import jsIcon from "../../public/tech/javascript.svg";
import tyIcon from "../../public/tech/typescript.svg";
import nextjsIcon from "../../public/tech/nextjs.svg";
// import reactIcon from "../../public/tech/react.svg";
// import nodejsIcon from "../../public/tech/nodejs.svg";
// import mongoIcon from "../public/tech/mongo.svg";
// import mysqlIcon from "../public/tech/mysql.svg";
// import figmaIcon from "../public/figma.svg";
// import photoshopIcon from "../public/photoshop.svg";
// import illustratorIcon from "../public/illustrator.svg";

function SkillsSection() {
  return (
    <div className={styles.skills}>
      <h2>Skills e Frameworks</h2>
      <div className={styles.iconRow}>
        <Image src={flutterSvg} width={50} height={50} alt="Flutter" />
        <Image src={jsIcon} width={50} height={50} alt="JavaScript" />
        <Image src={tyIcon} width={50} height={50} alt="TypeScipt" />
        <Image src={nextjsIcon} width={50} height={50} alt="Next.js" />
        <Image src={flutterSvg} width={50} height={50} alt="Node.js" />
        <Image src={flutterSvg} width={50} height={50} alt="Android" />
        <Image src={flutterSvg} width={50} height={50} alt="Kotlin" />
        <Image src={flutterSvg} width={50} height={50} alt="HTML" />
        <Image src={flutterSvg} width={50} height={50} alt="Css" />
        <Image src={flutterSvg} width={50} height={50} alt="Postgress" />
        <Image src={flutterSvg} width={50} height={50} alt="Mysql" />
        <Image src={flutterSvg} width={50} height={50} alt="MariaDB" />
        <Image src={flutterSvg} width={50} height={50} alt="Faribase" />
        <Image src={flutterSvg} width={50} height={50} alt="Git" />
        <Image src={flutterSvg} width={50} height={50} alt="Figma" />
      </div>
    </div>
  );
}

export default SkillsSection;
