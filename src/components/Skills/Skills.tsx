import styles from "./css/Skills.module.css";
import { useTranslation } from "react-i18next";
import SkillVisualizer from "./SkillVisualizer";
import logos from "../../utils/imagesImports/logos";
import SkillSelector from "./SkillSelector";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectSkill } from "../../app/Slices/skillSelectorSlice";

const Skills = () => {
  const dispatch = useAppDispatch();
  const { selectedSkill } = useAppSelector((state) => state.skillSelector);
  const { t } = useTranslation();
  return (
    <section
      id="skills"
      className={styles.mainContainer}
      onClick={() => {
        selectedSkill && dispatch(selectSkill(null));
      }}
    >
      <article className={styles.description}>
        <h2>{t("skills.title")}</h2>
        <h3>{t("skills.skillsfromOpenClassroom")}</h3>
        <ul className={styles.skillList}>
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
        <ul className={styles.skillList}>
          <li>{t("skills.skillList.0")}</li>
          <li>{t("skills.skillList.1")}</li>
          <li>{t("skills.skillList.2")}</li>
        </ul>
      </article>
      <section className={styles.skillsContainer}>
        <div className={styles.twoColumnSkills}>
          <SkillSelector
            category="Frontend"
            skillList={[
              { name: "React", logo: logos.react },
              { name: "Redux", logo: logos.redux },
              { name: "JavaScript", logo: logos.javascript },
              { name: "TypeScript", logo: logos.typescript },
              { name: "Jest", logo: logos.jest },
            ]}
          />
          <SkillSelector
            category="Backend"
            skillList={[
              { name: "Express", logo: logos.express },
              { name: "MongoDB", logo: logos.mongoDB },
            ]}
          />
        </div>
        <div className={styles.twoColumnSkills}>
          <SkillSelector
            category={t("skills.design")}
            skillList={[
              { name: "Figma", logo: logos.figma },
            ]}
          />          <SkillSelector
          category={t("skills.ciCD")}
          skillList={[
            { name: "Docker", logo: logos.docker },
            { name: "AWS", logo: logos.aws },
          ]}
        />
        </div>
      </section>
    </section>
  );
};
export default Skills;
