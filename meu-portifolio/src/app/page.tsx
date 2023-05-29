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
import foto1 from "../../public/13.png";
import foto2 from "../../public/7.png";
import foto3 from "../../public/image1.jpg";
import foto4 from "../../public/9.png";
import ButtonGroup from "@/components/button";
import ProjectSection from "@/components/project";
import ContactSection from "@/components/contact";
import SkillsSection from "@/components/skills";
import ScrollToTopButton from "@/components/scroll";

export default function Home() {
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
          <div className={about.contact} style={{ fontWeight: "300" }}>
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
          imageSrc={foto1}
          repoLink="https://github.com/Matheus-hora48/loja-flutter"
        />
        <ProjectSection
          align="none"
          title="Chat realtime com GetX e faribase"
          description="O projeto utiliza o Firebase, uma plataforma fornecida pelo Google, para lidar com a autenticação de usuários, armazenamento e sincronização de mensagens em tempo real, além de compartilhamento de fotos. Além disso,  GetX ajuda a desenvolver um aplicativo fluido, estruturado e de fácil manutenção. Juntas, essas tecnologias proporcionam aos usuários uma experiência excepcional de chat em tempo real."
          imageSrc={foto2}
          repoLink="https://github.com/Matheus-hora48/flutter-chat"
        />
        <ProjectSection
          title="Previsão do tempo com api externa"
          align="center"
          description="Esse app fornece informações sobre o clima em diferentes lugares e utiliza uma API externa para obter esses dados precisos.
          O aplicativo utiliza a localização do dispositivo para exibir a previsão do tempo específica da região em que o usuário se encontra. Isso é possível graças à integração com a API de previsão do tempo, uma fonte confiável de informações climáticas."
          imageSrc={foto3}
          repoLink="https://github.com/Matheus-hora48/Weather-App"
        />
        <ProjectSection
          title="To do com GetX e Sqflite (dark mode)"
          align="none"
          description="O aplicativo To-Do com lembretes personalizados é uma ferramenta eficiente e versátil para organizar tarefas diárias, semanais e mensais. Ele oferece uma experiência intuitiva para gerenciar atividades diárias, permitindo salvar tarefas e configurar lembretes personalizados. Os lembretes podem ser definidos para diferentes frequências, garantindo que tarefas importantes nunca sejam esquecidas. "
          imageSrc={foto4}
          repoLink="https://github.com/Matheus-hora48/Flutter-To-Do-App"
        />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <ScrollToTopButton />
    </main>
  );
}
