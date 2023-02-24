import styles from "./css/SkillVisualizer.module.css";

interface Props {
  skillName: string;
  logo: string;
  score: number;
}

const SkillVisualizer = (props: Props) => {
  const { skillName, logo, score } = props;
  return (
    <div className={styles.skillContainer}>
      <p>{skillName}</p>
      <img src={logo} alt={skillName + "logo"} />
      <div className={styles.scoreContainer}>
        <div className={styles.scoreBar} style={{ width: score + "%" }}></div>
      </div>
    </div>
  );
};
export default SkillVisualizer;
