import Link from "next/link";
import styles from "../style/page.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__left}>
        <h1>Matheus hora</h1>
      </div>
      <div className={styles.navbar__right}>
        <div>
          <Link href="#about">
            <span>Sobre Mim</span>
          </Link>
          <Link href="#project">
            <span>Projetos</span>
          </Link>
          <Link href="#contact" className={styles.navbar_button}>
            <span>Contato</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
