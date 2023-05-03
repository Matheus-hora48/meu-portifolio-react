import styles from "../style/skills.module.css";
import flutterSvg from "../../public/flutter.svg";
import Image from "next/image";

// import htmlIcon from "../public/html.svg";
// import cssIcon from "../public/css.svg";
// import jsIcon from "../public/js.svg";
// import reactIcon from "../public/react.svg";
// import nextjsIcon from "../public/nextjs.svg";
// import nodejsIcon from "../public/nodejs.svg";
// import mongoIcon from "../public/mongo.svg";
// import mysqlIcon from "../public/mysql.svg";
// import figmaIcon from "../public/figma.svg";
// import photoshopIcon from "../public/photoshop.svg";
// import illustratorIcon from "../public/illustrator.svg";

function SkillsSection() {
  return (
    <div className={styles.skills}>
      <h2>Skills e Frameworks</h2>
      <div className={styles.iconRow}>
        <Image src={flutterSvg} alt="Flutter" />
        <Image src={flutterSvg} alt="JavaScript" />
        <Image src={flutterSvg} alt="TypeScipt" />
        <Image src={flutterSvg} alt="Next.js" />
        <Image src={flutterSvg} alt="Node.js" />
        <Image src={flutterSvg} alt="Android" />
        <Image src={flutterSvg} alt="Kotlin" />
        <Image src={flutterSvg} alt="HTML" />
        <Image src={flutterSvg} alt="Css" />
        <Image src={flutterSvg} alt="Postgress" />
        <Image src={flutterSvg} alt="Mysql" />
        <Image src={flutterSvg} alt="MariaDB" />
        <Image src={flutterSvg} alt="Faribase" />   
        <Image src={flutterSvg} alt="Git" />
        <Image src={flutterSvg} alt="Figma" />
      </div>
    </div>
  );
}

export default SkillsSection;
