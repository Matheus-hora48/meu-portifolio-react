"use client";
import { useEffect, useState } from "react";
import styles from "../style/scroll.module.css";
import ArrowUpIcon from "../../public/up-arrow.png";
import Image from "next/image";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles.button} ${showButton ? styles.show : ""}`}
      onClick={scrollToTop}
    >
      <Image src={ArrowUpIcon} width={40} alt="Voltar ao topo" />
    </div>
  );
};

export default ScrollToTopButton;
