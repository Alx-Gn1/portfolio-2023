import styles from "./css/Skills.module.css";
import { useTranslation } from "react-i18next";
import SkillVisualizer from "./SkillVisualizer";
import logos from "../utils/logos/logos";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className={styles.mainContainer}>
      <article className={styles.description}>
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
      <article className={styles.skillsContainer}>
        <SkillVisualizer skillName="HTML5" logo={logos.html} score={100} experience={"1 " + t("year")} />
        <SkillVisualizer skillName="CSS3" logo={logos.css} score={100} experience={"1 " + t("year")} />
        <SkillVisualizer skillName="JavaScript" logo={logos.javascript} score={90} experience={"8 " + t("months")} />
        <SkillVisualizer skillName="React" logo={logos.react} score={50} experience={"5 " + t("months")} />
        <SkillVisualizer skillName="Express" logo={logos.express} score={15} experience={"3 " + t("weeks")} />
        <SkillVisualizer skillName="TypeScript" logo={logos.typescript} score={9} experience={"2 " + t("weeks")} />
        <SkillVisualizer skillName="Redux" logo={logos.redux} score={9} experience={"2 " + t("weeks")} />
        <SkillVisualizer skillName="Jest" logo={logos.jest} score={9} experience={"2 " + t("weeks")} />
        <SkillVisualizer skillName="Figma" logo={logos.figma} score={5.5} experience={"1 " + t("week")} />
      </article>
    </section>
  );
};
export default Skills;
