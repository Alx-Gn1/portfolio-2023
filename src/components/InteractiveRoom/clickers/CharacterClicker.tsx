import styles from "./css/clickers.module.css";
import { useTranslation } from "react-i18next";

const CharacterClicker = (props: { onClick: Function }) => {
  const { onClick } = props;
  const { t } = useTranslation();
  return (
    <div
      className={styles.characterClicker}
      onClick={() => {
        onClick();
      }}
    >
      CharacterClicker
    </div>
  );
};
export default CharacterClicker;
