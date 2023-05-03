import styles from "../style/page.module.css";
import about from "../style/about.module.css";
import Image from "next/image";
import Link from "next/link";
import androidSvg from "../../public/android.svg";
import flutterSvg from "../../public/flutter.svg";
import gitSvg from "../../public/git.svg";
import linkedinSvg from "../../public/linkedin.svg";
import emailSvg from "../../public/email.svg";
import phoneSvg from "../../public/phone.svg";
import photoPng from "../../public/photo.png";
import ButtonGroup from "@/components/button";
import ProjectSection from "@/components/project";
import ContactSection  from "@/components/contact";
import SkillsSection  from "@/components/skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left_column}>
          <Image
            alt="Foto de Matheus"
            src={photoPng}
            width={315}
            height={315}
            style={{
              borderRadius: "50%",
              borderColor: "#4A4458",
              borderWidth: "8px",
              borderStyle: "solid",
            }}
          />
        </div>
        <div className={styles.right_column}>
          <h2>Olá, eu sou o Matheus</h2>
          <div className={styles.mobile_icon}>
            <Image
              alt=""
              src={flutterSvg}
              width={40}
              height={40}
              style={{
                marginLeft: "20px",
                marginRight: "20px",
              }}
            />
            <p>Desenvolvedor mobile</p>
            <Image
              alt=""
              src={androidSvg}
              width={40}
              height={40}
              style={{
                marginLeft: "20px",
                marginRight: "20px",
              }}
            />
          </div>
          <Link href="/">
            <span className={styles.button}>Meus Projetos</span>
          </Link>
        </div>
      </div>
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
      <SkillsSection/>
      <div className={styles.project_list}>
        <ProjectSection
          title="Projeto 1"
          description="Desenvolvi um aplicativo completo em Flutter que utiliza uma API para coletar dados externos e exibi-los na interface do usuário. Para permitir a comunicação eficiente com a API e executar operações essenciais, utilizei métodos HTTP padrão, mantendo as informações exibidas sempre atualizadas.<br>
          O desenvolvimento desse projeto me permitiu aprender e aplicar conceitos importantes de programação em um ambiente real. Adquiri uma compreensão mais profunda de como os diferentes componentes de um aplicativo trabalham juntos e como aplicar práticas recomendadas para criar aplicativos seguros, eficientes e escaláveis. As habilidades adquiridas com a criação deste projeto são valiosas para o avanço da minha carreira de desenvolvedor e podem ser aplicadas em projetos futuros."
          imageSrc={photoPng}
          repoLink="https://github.com/user/project1"
        />
        <ProjectSection
          title="Projeto 2"
          description="Desenvolvi um aplicativo completo em Flutter que utiliza uma API para coletar dados externos e exibi-los na interface do usuário. Para permitir a comunicação eficiente com a API e executar operações essenciais, utilizei métodos HTTP padrão, mantendo as informações exibidas sempre atualizadas.<br>
          O desenvolvimento desse projeto me permitiu aprender e aplicar conceitos importantes de programação em um ambiente real. Adquiri uma compreensão mais profunda de como os diferentes componentes de um aplicativo trabalham juntos e como aplicar práticas recomendadas para criar aplicativos seguros, eficientes e escaláveis. As habilidades adquiridas com a criação deste projeto são valiosas para o avanço da minha carreira de desenvolvedor e podem ser aplicadas em projetos futuros."
          imageSrc={photoPng}
          repoLink="https://github.com/user/project2"
        />
        <ProjectSection
          title="Projeto 3"
          description="Desenvolvi um aplicativo completo em Flutter que utiliza uma API para coletar dados externos e exibi-los na interface do usuário. Para permitir a comunicação eficiente com a API e executar operações essenciais, utilizei métodos HTTP padrão, mantendo as informações exibidas sempre atualizadas.<br>
          O desenvolvimento desse projeto me permitiu aprender e aplicar conceitos importantes de programação em um ambiente real. Adquiri uma compreensão mais profunda de como os diferentes componentes de um aplicativo trabalham juntos e como aplicar práticas recomendadas para criar aplicativos seguros, eficientes e escaláveis. As habilidades adquiridas com a criação deste projeto são valiosas para o avanço da minha carreira de desenvolvedor e podem ser aplicadas em projetos futuros."
          imageSrc={photoPng}
          repoLink="https://github.com/user/project3"
        />
        <ProjectSection
          title="Projeto 4"
          description="Desenvolvi um aplicativo completo em Flutter que utiliza uma API para coletar dados externos e exibi-los na interface do usuário. Para permitir a comunicação eficiente com a API e executar operações essenciais, utilizei métodos HTTP padrão, mantendo as informações exibidas sempre atualizadas.<br>
          O desenvolvimento desse projeto me permitiu aprender e aplicar conceitos importantes de programação em um ambiente real. Adquiri uma compreensão mais profunda de como os diferentes componentes de um aplicativo trabalham juntos e como aplicar práticas recomendadas para criar aplicativos seguros, eficientes e escaláveis. As habilidades adquiridas com a criação deste projeto são valiosas para o avanço da minha carreira de desenvolvedor e podem ser aplicadas em projetos futuros."
          imageSrc={photoPng}
          repoLink="https://github.com/user/project4"
        />
      </div>
      <ContactSection/>
    </main>
  );
}
