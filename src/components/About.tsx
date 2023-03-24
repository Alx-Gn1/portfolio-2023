import styles from "./css/About.module.css";
import { useTranslation } from "react-i18next";
import photoOfMyself from "../assets/photo-portfolio.webp";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className={styles.mainContainer}>
      <article className={styles.contentContainer}>
        <h2>{t("about.title")}</h2>
        <img src={photoOfMyself} alt="Portrait Alexandre Guenin" className={styles.tabletPicture} loading="lazy" />
        <p className={styles.introduction}>
          {t("about.introductionPart1")}
          <a href="https://www.francecompetences.fr/recherche/rncp/36076/" target="_blank" rel="noreferrer noopener">
            {t("about.introductionPart2")}
          </a>
          {t("about.introductionPart3")}
        </p>
        <p className={styles.story}>&ensp;{t("about.story")}</p>
        <p>
          <br />
          <strong>&ensp;{t("about.imLookingFor")}</strong>
        </p>
        <p>
          <br />
          {t("about.contactMePart1")}
          <a href="#contact">{t("about.contactMePart2")}</a>
          {t("about.contactMePart3")}
        </p>
        <p>
          {t("about.seeMyResume")}
          <a
            href="https://www.canva.com/design/DAFd2SuFAtk/GTcMJNC1czljOohcQRJrFA/view?utm_content=DAFd2SuFAtk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target={"_blank"}
            rel="noreferrer"
          >
            {t("about.seeMyResumeLink")}
          </a>
        </p>
      </article>
      <img src={photoOfMyself} alt="Portrait Alexandre Guenin" className={styles.pictureOfMe} loading="lazy" />
    </section>
  );
};
export default About;
