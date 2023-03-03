import styles from "./css/Header.module.css";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../app/hooks";
import { linkScrollToPosition } from "../../utils/functions/linkScrollToPosition";

const NavBar = (props: { closeDrawer: Function }) => {
  const { t } = useTranslation();
  const { closeDrawer } = props;
  const { userDevice, deviceWidth } = useAppSelector((state) => state.userDevice);

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
      <nav
        className={styles.linkContainer}
        onClick={() => {
          setTimeout(closeDrawer, 300);
        }}
      >
        <p className={styles.drawerTitle}>Naviguer vers la section :</p>
        <li>
          <a
            className={styles.headerLink}
            href="#about"
            onClick={() => {
              if (deviceWidth === 500) {
                linkScrollToPosition(980, userDevice);
              } else if (deviceWidth === 400) {
                linkScrollToPosition(880, userDevice);
              } else linkScrollToPosition(840, userDevice);
            }}
          >
            {t("header.aboutMe")}
          </a>
        </li>
        <li>
          <a className={styles.headerLink} href="#skills">
            {t("header.skills")}
          </a>
        </li>
        <li>
          <a
            className={styles.headerLink}
            href="#works"
            onClick={() => {
              linkScrollToPosition(3400, userDevice);
            }}
          >
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
