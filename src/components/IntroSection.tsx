import styles from "./css/IntroSection.module.css";
import { useTranslation } from "react-i18next";
import InteractiveRoom from "./InteractiveRoom/InteractiveRoom";

const IntroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="introduction" className={styles.mainContainer}>
      <article className={styles.titleContainer}>
        <h1 className={styles.profession}>{t("introSection.profession")}</h1>
        <h2 className={styles.name}>
          ALEXANDRE
          <br />
          GUENIN
        </h2>
        <p className={styles.subtitle}>{t("introSection.interactiveDrawingDescription")}</p>
      </article>
      <div className={styles.roomVisualizer}>
        <InteractiveRoom />
      </div>
    </section>
  );
};
export default IntroSection;
