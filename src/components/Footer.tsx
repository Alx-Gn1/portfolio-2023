import styles from "./css/Footer.module.css";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../app/hooks";

const Footer = () => {
  const { t } = useTranslation();
  const { userDevice, deviceWidth } = useAppSelector((state) => state.userDevice);
  const linkScrollToPosition = (position: number) => {
    setTimeout(() => {
      window.scrollTo(0, position);
    }, 1);
  };
  return (
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
            onClick={() => {
              if (userDevice === "mobile") {
                deviceWidth === 500 ? linkScrollToPosition(820) : linkScrollToPosition(740);
              } else linkScrollToPosition(720);
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
              userDevice === "mobile" ? linkScrollToPosition(3270) : linkScrollToPosition(2720);
            }}
          >
            {t("header.works")}
          </a>
        </li>
      </nav>
    </footer>
  );
};
export default Footer;
