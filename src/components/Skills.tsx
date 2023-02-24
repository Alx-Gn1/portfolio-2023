import styles from "./css/Skills.module.css";
import { useTranslation } from "react-i18next";
import { useParallax } from "react-scroll-parallax";
import SkillVisualizer from "./SkillVisualizer";
import logos from "../utils/logos/logos";
import { useAppSelector } from "../app/hooks";

const Skills = () => {
  const { t } = useTranslation();
  const {parallaxMultiplier} = useAppSelector((state) => state.userDevice);
  const parallax = {
    fast: useParallax({ speed: parallaxMultiplier * 10 }),
    ultraFast: useParallax({ speed: parallaxMultiplier * 50 }),
  };
  return (
    <section id="skills" className={styles.mainContainer}>
      <article className={styles.description} ref={parallax.fast.ref}>
        <h2>{t("skills.title")}</h2>
        <h3>{t("skills.skillsfromOpenClassroom")}</h3>
        <ul>
          <li>{t("skills.skillListOC.0")}</li>
          <li>{t("skills.skillListOC.1")}</li>
          <li>{t("skills.skillListOC.3")}</li>
          <li>{t("skills.skillListOC.5")}</li>
          <li>{t("skills.skillListOC.2")}</li>
          <li>{t("skills.skillListOC.4")}</li>
          <li>{t("skills.skillListOC.6")}</li>
          <li>{t("skills.skillListOC.7")}</li>
        </ul>
        <h3>{t("skills.skillsSelfTaught")}</h3>
        <ul>
          <li>{t("skills.skillList.0")}</li>
          <li>{t("skills.skillList.1")}</li>
          <li>{t("skills.skillList.2")}</li>
        </ul>
      </article>
      <article ref={parallax.ultraFast.ref} className={styles.skillsContainer}>
        <SkillVisualizer skillName="React" logo={logos.react} score={100} />
        <SkillVisualizer skillName="JavaScript" logo={logos.javascript} score={90} />
        <SkillVisualizer skillName="HTML5" logo={logos.html} score={90} />
        <SkillVisualizer skillName="CSS3" logo={logos.css} score={80} />
        <SkillVisualizer skillName="TypeScript" logo={logos.typescript} score={50} />
        <SkillVisualizer skillName="Express" logo={logos.express} score={30} />
        <SkillVisualizer skillName="Jest" logo={logos.jest} score={25} />
        <SkillVisualizer skillName="Figma" logo={logos.figma} score={15} />
        <SkillVisualizer skillName="Redux" logo={logos.redux} score={15} />
      </article>
    </section>
  );
};
export default Skills;
