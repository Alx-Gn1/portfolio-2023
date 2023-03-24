import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../app/hooks";
import styles from "./css/SkillVisualizer.module.css";

interface Props {
  skillName: string;
  logo: string;
  selectedSkill: string | null;
  setSelectedSkill: Function;
}
// {
//   "0": "Créer des éléments d'interface grâce à des composants dynamiques et réutilisables",
//   "1": "Configurer la navigation entre les pages de l'application avec React Router",
//   "2": "Communiquer avec une API et gérer des données asynchrones",
//   "3": "Réaliser des test unitaires et des test d'intégrations à l'aide de Jest/React Testing Library",
//   "4": "Créer une application React utilisant TypeScript et Redux"
// }

const SkillVisualizer = (props: Props) => {
  const { t } = useTranslation();
  const { userDevice } = useAppSelector((state) => state.userDevice);
  const { skillName, logo, selectedSkill, setSelectedSkill } = props;
  const skillsTranslationList = t(`skills.skillPerTechnology.${skillName}`, { returnObjects: true });
  const skillsPerTechnology = Object.values(skillsTranslationList).map((value) => value);

  return (
    <>
      {selectedSkill === skillName || selectedSkill === null ? (
        <div
          className={
            selectedSkill === skillName ? `${styles.skillContainer} ${styles.selected}` : styles.skillContainer
          }
          onClick={() => {
            if (selectedSkill !== skillName) {
              if (userDevice === "mobile") window.scrollTo(0, 2825)
              setSelectedSkill(skillName);
            }
          }}
        >
          <img src={logo} alt={skillName + "logo"} loading="lazy" />
          <p className={styles.skillName}>{skillName}</p>
        </div>
      ) : null}
      {selectedSkill === skillName ? (
        <ul className={styles.skillList}>
          {skillsPerTechnology.map((skill, index) => (
            <li key={skillName + "skill" + index}>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
export default SkillVisualizer;
