import styles from "./css/SkillVisualizer.module.css";

interface Props {
  skillName: string;
  logo: string;
  score: number;
  experience: string;
}

const SkillVisualizer = (props: Props) => {
  const { skillName, logo, score, experience } = props;
  return (
    <div className={styles.skillContainer}>
      <p className={styles.skillName}>{skillName}</p>
      <img src={logo} alt={skillName + "logo"} loading="lazy"/>
      <div className={styles.scoreContainer}>
        <p>{experience}</p>
        <div className={styles.scoreBar} style={{ width: score + "%" }}></div>
      </div>
    </div>
  );
};
export default SkillVisualizer;
