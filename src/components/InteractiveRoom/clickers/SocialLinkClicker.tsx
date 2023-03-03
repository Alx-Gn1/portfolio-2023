import styles from "./css/clickers.module.css";
import { useTranslation } from "react-i18next";

const SocialLinkClicker = (props: { onClick: Function }) => {
  const { onClick } = props;
  const { t } = useTranslation();
  return (
    <div
      className={styles.socialLinkClicker}
      onClick={() => {
        onClick();
      }}
    >
      SocialLinkClicker
    </div>
  );
};
export default SocialLinkClicker;
