import styles from "../style/contact.module.css";
import Image from "next/image";

import gitSvg from "../../public/git.svg";
import linkedinSvg from "../../public/linkedin.svg";
import emailSvg from "../../public/email.svg";
import phoneSvg from "../../public/phone.svg";
import instaSvg from "../../public/insta.svg";

function ContactSection() {
  return (
    <div className={styles.contact_section}>
      <h2>Entre em contato</h2>
      <div className={styles.contact_section__icons}>
        <a href="https://www.instagram.com/matheus11hora/">
          <Image alt="LinkedIn" src={instaSvg} width={30} height={30} />
        </a>
        <a href="mailto:matheus11hora@gmail.com">
          <Image alt="LinkedIn" src={emailSvg} width={30} height={30} />
        </a>
        <a href="tel:+5577998245456">
          <Image alt="LinkedIn" src={phoneSvg} width={30} height={30} />
        </a>
        <a href="https://github.com/Matheus-hora48">
          <Image alt="LinkedIn" src={gitSvg} width={30} height={30} />
        </a>
        <a href="https://www.linkedin.com/in/devmatheushora/">
          <Image alt="LinkedIn" src={linkedinSvg} width={30} height={30} />
        </a>
      </div>
      <p className={styles.contact_section__text}>
        Estou sempre aberto para receber novas propostas e colaborar em novos
        projetos! Se você precisa de ajuda com algum projeto ou tem alguma
        proposta interessante para mim, sinta-se à vontade para entrar em
        contato pelos canais acima.
      </p>
      <a href="../curriculo/meu_curriculo.pdf" download>
        <button className={styles.contact_section__button}>
          Baixar Currículo
        </button>
      </a>
    </div>
  );
}

export default ContactSection;
