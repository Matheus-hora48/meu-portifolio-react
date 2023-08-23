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
import myphotoPng from "../../public/myphoto.png";
import projeto011 from "../../public/projeto1/11.png";
import projeto012 from "../../public/projeto1/12.png";
import projeto013 from "../../public/projeto1/13.png";
import projeto014 from "../../public/projeto1/14.png";
import projeto015 from "../../public/projeto1/15.png";
import projeto016 from "../../public/projeto1/16.png";
import projeto017 from "../../public/projeto1/17.png";
import projeto018 from "../../public/projeto1/18.png";
import projeto019 from "../../public/projeto1/19.png";

import projeto021 from "../../public/projeto2/3.png";
import projeto022 from "../../public/projeto2/4.png";
import projeto023 from "../../public/projeto2/5.png";
import projeto024 from "../../public/projeto2/6.png";
import projeto025 from "../../public/projeto2/7.png";
import projeto026 from "../../public/projeto2/8.png";
import projeto027 from "../../public/projeto2/9.png";
import projeto028 from "../../public/projeto2/10.png";

import projeto031 from "../../public/projeto3/28.png";
import projeto032 from "../../public/projeto3/29.png";
import projeto033 from "../../public/projeto3/30.png";
import projeto034 from "../../public/projeto3/31.png";
import projeto035 from "../../public/projeto3/32.png";
import projeto036 from "../../public/projeto3/33.png";
import projeto037 from "../../public/projeto3/34.png";
import projeto038 from "../../public/projeto3/35.png";
import projeto039 from "../../public/projeto3/36.png";
import projeto0310 from "../../public/projeto3/37.png";
import projeto0311 from "../../public/projeto3/38.png";
import projeto0312 from "../../public/projeto3/39.png";

import projeto041 from "../../public/projeto4/39.png";
import projeto042 from "../../public/projeto4/40.png";
import projeto043 from "../../public/projeto4/41.png";
import projeto044 from "../../public/projeto4/42.png";
import projeto045 from "../../public/projeto4/43.png";
import projeto046 from "../../public/projeto4/44.png";
import projeto047 from "../../public/projeto4/45.png";
import projeto048 from "../../public/projeto4/46.png";
import projeto049 from "../../public/projeto4/47.png";
import projeto0410 from "../../public/projeto4/48.png";

import ButtonGroup from "@/components/button";
import ProjectSection from "@/components/project";
import ContactSection from "@/components/contact";
import SkillsSection from "@/components/skills";
import ScrollToTopButton from "@/components/scroll";

export default function Home() {
  const projeto1 = [
    projeto011,
    projeto012,
    projeto013,
    projeto014,
    projeto015,
    projeto016,
    projeto017,
    projeto018,
    projeto019,
  ];

  const projeto2 = [
    projeto021,
    projeto022,
    projeto023,
    projeto024,
    projeto025,
    projeto026,
    projeto027,
    projeto028,
  ];

  const projeto3 = [
    projeto031,
    projeto032,
    projeto033,
    projeto034,
    projeto035,
    projeto036,
    projeto037,
    projeto038,
    projeto039,
    projeto0310,
    projeto0311,
    projeto0312,
  ];

  const projeto4 = [
    projeto041,
    projeto042,
    projeto043,
    projeto044,
    projeto045,
    projeto046,
    projeto047,
    projeto048,
    projeto049,
    projeto0410,
  ];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.text_container}>
            <h2 className={styles.heading2}>Olá 👋 eu sou o Matheus Hora</h2>
            <div className={styles.headingline}>
              <h1 className={styles.heading1} style={{ marginTop: "20px" }}>
                FLUTTER
              </h1>
              <Image
                alt="Foto de Matheus"
                src={photoPng}
                className={styles.image_container}
                width={315}
                height={315}
              />
            </div>
            <h1 className={styles.heading1} style={{ marginBottom: "20px" }}>
              DEVELOPER
            </h1>
            <h3 className={styles.heading3}>
              Tenho 21 anos, sou desenvolvedor mobile, <br /> tenho mais de 2
              anos de experiência na área
            </h3>
          </div>
        </div>
      </div>

      <h1 id="about" className={about.about} style={{ padding: "20px" }}>
        Sobre Mim
      </h1>
      <section className={about.container}>
        <div className={about.left_box}>
          <div className={about.image_container}>
            <Image
              alt="Foto de Matheus"
              src={myphotoPng}
              className={about.image}
            />
          </div>
          <div className={about.links}>
            <a href="https://github.com/Matheus-hora48" target="_blank">
              <Image alt="GitHub" src={gitSvg} width={40} height={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/devmatheushora/"
              target="_blank"
            >
              <Image alt="LinkedIn" src={linkedinSvg} width={40} height={40} />
            </a>
          </div>
          <div className={about.contact} style={{ fontWeight: "300" }}>
            <p>
              E aí, beleza? Sou um desenvolvedor Flutter super capacitado e
              motivado, com um amor insaciável por tecnologia e soluções
              inovadoras. Com uma habilidade de dar inveja em Dart e Flutter,
              estou pronto para liderar projetos desafiadores e trabalhar com
              equipes super bem preparadas. Além disso, tenho uma base sólida em
              programação, design de aplicativos móveis e experiência do
              usuário, o que me ajuda a me destacar como um engenheiro de
              software de alto nível.
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
        className={styles.project}
        id="project"
        style={{ padding: "20px", marginBottom: "20px", marginTop: "60px" }}
      >
        Meus projetos
      </h1>
      <div className={styles.project_list}>
        <ProjectSection
          align="center"
          title="E-commerce com GetX e API"
          description="Desenvolvi um aplicativo completo em Flutter que utiliza uma API para coletar dados externos e exibi-los na interface do usuário. Para permitir a comunicação eficiente com a API e executar operações essenciais, utilizei métodos HTTP padrão, mantendo as informações exibidas sempre atualizadas."
          imageSrc={projeto013}
          repoLink="https://github.com/Matheus-hora48/loja-flutter"
          imagens={projeto1}
        />
        <ProjectSection
          align="none"
          title="Chat realtime com GetX e Firebase"
          description="O projeto utiliza o Firebase, uma plataforma fornecida pelo Google, para lidar com a autenticação de usuários, armazenamento e sincronização de mensagens em tempo real, além de compartilhamento de fotos. Além disso,  GetX ajuda a desenvolver um aplicativo fluido, estruturado e de fácil manutenção. Juntas, essas tecnologias proporcionam aos usuários uma experiência excepcional de chat em tempo real."
          imageSrc={projeto028}
          repoLink="https://github.com/Matheus-hora48/flutter-chat"
          imagens={projeto2}
        />
        <ProjectSection
          title="Gerenciador de ficha de treino (Em desenvolvimento) com Mox/Modular"
          align="center"
          description="Neste aplicativo, você poderá cadastrar sua ficha de treino e monitorar seus gastos calóricos e consumo de água de acordo com suas atividades."
          imageSrc={projeto031}
          repoLink="/"
          imagens={projeto3}
        />
        <ProjectSection
          title="Gerenciador de horários em barbearia com riverpod"
          align="none"
          description="Neste aplicativo, você poderá cadastrar sua ficha de treino e monitorar seus gastos calóricos e consumo de água de acordo com suas atividades."
          imageSrc={projeto044}
          repoLink="https://github.com/Matheus-hora48/barbershop"
          imagens={projeto4}
        />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <ScrollToTopButton />
    </main>
  );
}
