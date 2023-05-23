import styles from "../style/page.module.css";
import about from "../style/about.module.css";
import Image from "next/image";
import Link from "next/link";
import androidSvg from "../../public/tech/android.svg";
import flutterSvg from "../../public/tech/flutter.svg";
import gitSvg from "../../public/git.svg";
import linkedinSvg from "../../public/linkedin.svg";
import emailSvg from "../../public/email.svg";
import phoneSvg from "../../public/phone.svg";
import photoPng from "../../public/photo.png";
import foto from "../../public/3.png";
import ButtonGroup from "@/components/button";
import ProjectSection from "@/components/project";
import ContactSection from "@/components/contact";
import SkillsSection from "@/components/skills";
import ScrollToTopButton from "@/components/scroll";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Olá 👋 eu sou o Matheus</h2>
        <div className={styles.heading}>
          <h1 className={styles.heading1}>
            Flutter <br />
            Developer
          </h1>
          <h3 className={styles.heading3}>
            Tenho 21 anos sou desenvolvedor mobile <br /> com 2 anos de
            experiência de trabalho
          </h3>
        </div>
        <Link href="#project">
          <span className={styles.button}>Meus Projetos</span>
        </Link>
      </div>
      <h1 id="about" style={{ padding: "20px" }}>
        Sobre Mim
      </h1>
      <section className={about.container}>
        <div className={about.left_box}>
          <div className={about.image_container}>
            <Image
              alt="Foto de Matheus"
              src={photoPng}
              className={about.image}
            />
          </div>
          <div
            className={about.links}
            style={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <a href="https://github.com/Matheus-hora48" target="_blank">
                <Image alt="GitHub" src={gitSvg} width={40} height={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/devmatheushora/"
                target="_blank"
              >
                <Image
                  alt="LinkedIn"
                  src={linkedinSvg}
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
          <div className={about.contact}>
            <p>
              E aí, beleza? Sou um desenvolvedor Flutter super capacitado e
              motivado, com um amor insaciável por tecnologia e soluções
              inovadoras. Com uma habilidade de dar inveja em Dart e Flutter,
              estou pronto para liderar projetos desafiadores e trabalhar com
              equipes super bem preparadas. Além disso, tenho uma base sólida em
              programação, design de aplicativos móveis e experiência do
              usuário, o que me ajuda a me destacar como um Engenheiro de
              Software de alto nível.
            </p>
            <p>
              Estou em busca de novas oportunidades para crescer e aprimorar
              minhas habilidades em um ambiente inovador e colaborativo. Então,
              se você está procurando um profissional que ama desafios e é
              apaixonado por tecnologia, você acaba de encontrar!
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              <Image alt="Email Icon" src={emailSvg} width={40} height={40} />
              <a href="/" style={{ marginLeft: "1rem" }}>
                matheus11hora@gmail.com
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              <Image alt="Email Icon" src={phoneSvg} width={40} height={40} />
              <a href="/" style={{ marginLeft: "1rem" }}>
                (77) 99824-5456
              </a>
            </div>
          </div>
        </div>
        <ButtonGroup />
      </section>
      <SkillsSection />
      <h1
        id="project"
        style={{ padding: "20px", marginBottom: "20px", marginTop: "60px" }}
      >
        Meus projetos
      </h1>
      <div className={styles.project_list}>
        <ProjectSection
          align="center"
          title="Quitanda virtual com flutter"
          description="Desenvolvi um aplicativo completo em Flutter que utiliza uma API para coletar dados externos e exibi-los na interface do usuário. Para permitir a comunicação eficiente com a API e executar operações essenciais, utilizei métodos HTTP padrão, mantendo as informações exibidas sempre atualizadas."
          imageSrc={foto}
          repoLink="https://github.com/Matheus-hora48/loja-flutter"
        />
        <ProjectSection
          align="none"
          title="Projeto 2"
          description="Desenvolvi um aplicativo completo em Flutter que utiliza uma API para coletar dados externos e exibi-los na interface do usuário. Para permitir a comunicação eficiente com a API e executar operações essenciais, utilizei métodos HTTP padrão, mantendo as informações exibidas sempre atualizadas."
          imageSrc={foto}
          repoLink="https://github.com/user/project2"
        />
        <ProjectSection
          title="Projeto 3"
          align="center"
          description="Desenvolvi um aplicativo completo em Flutter que utiliza uma API para coletar dados externos e exibi-los na interface do usuário. Para permitir a comunicação eficiente com a API e executar operações essenciais, utilizei métodos HTTP padrão, mantendo as informações exibidas sempre atualizadas."
          imageSrc={foto}
          repoLink="https://github.com/user/project3"
        />
        <ProjectSection
          title="Projeto 4"
          align="none"
          description="Desenvolvi um aplicativo completo em Flutter que utiliza uma API para coletar dados externos e exibi-los na interface do usuário. Para permitir a comunicação eficiente com a API e executar operações essenciais, utilizei métodos HTTP padrão, mantendo as informações exibidas sempre atualizadas."
          imageSrc={foto}
          repoLink="https://github.com/user/project4"
        />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <ScrollToTopButton />
    </main>
  );
}
