import styles from "./css/Header.module.css";
import { useTranslation } from "react-i18next";

const NavBar = (props: { closeDrawer: Function }) => {
  const { t } = useTranslation();
  const { closeDrawer } = props;

  return (
    <div id="navDrawer" className={styles.navContainer}>
      <div
        className={styles.drawerBackdrop}
        onClick={() => {
          closeDrawer();
        }}
      ></div>
      <div
        className={styles.drawerBackground}
        onClick={() => {
          closeDrawer();
        }}
      ></div>
      <nav className={styles.linkContainer}>
        <p className={styles.drawerTitle}>Naviguer vers la section :</p>
        <li>
          <a className={styles.headerLink} href="#about">
            {t("header.aboutMe")}
          </a>
        </li>
        <li>
          <a className={styles.headerLink} href="#skills">
            {t("header.skills")}
          </a>
        </li>
        <li>
          <a className={styles.headerLink} href="#works">
            {t("header.works")}
          </a>
        </li>
        <li>
          <a className={styles.headerLink} href="#contact">
            {t("header.contact")}
          </a>
        </li>
      </nav>
    </div>
  );
};
export default NavBar;
