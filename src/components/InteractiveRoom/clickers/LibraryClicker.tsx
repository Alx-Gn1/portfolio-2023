import styles from "./css/clickers.module.css";
import { useTranslation } from "react-i18next";

const LibraryClicker = (props: { onClick: Function }) => {
  const { onClick } = props;
  const { t } = useTranslation();
  return (
    <div
      className={styles.libraryClicker}
      onClick={() => {
        onClick();
      }}
    >
      LibraryClicker
    </div>
  );
};
export default LibraryClicker;
