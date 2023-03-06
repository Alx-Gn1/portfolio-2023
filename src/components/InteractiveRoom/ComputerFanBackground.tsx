import styles from "./css/ComputerFanBackground.module.css";
import { useTranslation } from "react-i18next";

const ComputerFanBackground = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.animBackground}></div>
      <div className={styles.animBackground}></div>
      <div className={styles.animBackground}></div>
    </div>
  );
};
export default ComputerFanBackground;
