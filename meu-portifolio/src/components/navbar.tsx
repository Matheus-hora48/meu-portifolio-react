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
          <Link href="/">
            <span>Sobre Mim</span>
          </Link>
          <Link href="/">
            <span>Projetos</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
