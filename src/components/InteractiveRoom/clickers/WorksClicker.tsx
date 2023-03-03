import styles from "./css/clickers.module.css";
import { useTranslation } from "react-i18next";

const WorksClicker = (props: { onClick: Function }) => {
  const { onClick } = props;
  const { t } = useTranslation();
  return (
    <div
      className={styles.worksClicker}
      onClick={() => {
        onClick();
      }}
    >
      WorksClicker
    </div>
  );
};
export default WorksClicker;
