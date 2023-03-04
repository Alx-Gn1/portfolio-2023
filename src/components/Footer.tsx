import styles from "./css/Footer.module.css";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../app/hooks";
import { linkScrollToPosition } from "../utils/functions/linkScrollToPosition";

const Footer = () => {
  const { t } = useTranslation();
  const { userDevice, deviceWidth } = useAppSelector((state) => state.userDevice);

  return (
    <>
      <div className={styles.footerBackground}></div>
      <footer className={styles.footer}>
        <div
          className={styles.nameContainer}
          onClick={() => {
            linkScrollToPosition(0, userDevice, true);
          }}
        >
          <div className={styles.separator}></div>
          <span className={styles.initiales}>AG</span>
        </div>
        <nav className={styles.linkContainer}>
          <li>
            <a
              className={styles.footerLink}
              href="#about"
              onClick={() => {
                // if (deviceWidth === 500) {
                //   linkScrollToPosition(980, userDevice);
                // } else if (deviceWidth === 400) {
                //   linkScrollToPosition(880, userDevice);
                // } else linkScrollToPosition(1400, userDevice, true);
              }}
            >
              {t("header.aboutMe")}
            </a>
          </li>
          <li>
            <a className={styles.footerLink} href="#skills">
              {t("header.skills")}
            </a>
          </li>
          <li>
            <a
              className={styles.footerLink}
              href="#works"
              onClick={() => {
                // if (userDevice === "mobile") {
                //   linkScrollToPosition(3400, userDevice);
                // } else linkScrollToPosition(2300, userDevice, true);
              }}
            >
              {t("header.works")}
            </a>
          </li>
        </nav>
      </footer>
    </>
  );
};
export default Footer;
