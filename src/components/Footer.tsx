import styles from "./css/Footer.module.css";
import { useTranslation } from "react-i18next";
import { linkScrollToPosition } from "../utils/functions/linkScrollToPosition";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.footerBackground}></div>
      <footer className={styles.footer}>
        <div
          className={styles.nameContainer}
          onClick={() => {
            linkScrollToPosition(0);
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
