import styles from "./css/Header.module.css";
import { useTranslation } from "react-i18next";
import CircleButtonSelector from "./CircleButtonSelector";
import langFlag from "../assets/en_fr_flag.webp";
import themeDarkIcon from "../assets/theme_dark.webp";
import themeLightIcon from "../assets/theme_light.webp";
import { useState } from "react";
import { closeNavDrawer, openNavDrawer } from "../utils/functions/drawerMenu";
import hamburgerIcon from "../assets/Hamburger_icon.svg";
import { useAppSelector } from "../app/hooks";

interface Props {
  theme: string;
  setTheme: Function;
}

const Header = (props: Props) => {
  const { theme, setTheme } = props;
  const { t, i18n } = useTranslation();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const { userDevice, deviceWidth } = useAppSelector((state) => state.userDevice);

  const linkScrollToPosition = (position: number) => {
    if (userDevice === "mobile") {
      setTimeout(() => {
        window.scrollTo(0, position);
      }, 1);
    }
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
    closeNavDrawer(styles);
  };
  const openDrawer = () => {
    setDrawerIsOpen(true);
    openNavDrawer(styles);
  };

  return (
    <header className={styles.headerContainer}>
      <button
        className={styles.openDrawerButton}
        onClick={() => {
          if (drawerIsOpen) {
            closeDrawer();
          } else {
            openDrawer();
          }
        }}
      >
        <img src={hamburgerIcon} alt="open lateral navigation menu" />
      </button>
      <div className={styles.nameContainer}>
        <div className={styles.separator}></div>
        <span className={styles.initiales}>AG</span>
        <div>
          <p>GUENIN</p>
          <p>ALEXANDRE</p>
        </div>
      </div>

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
                  linkScrollToPosition(820);
                } else linkScrollToPosition(740);
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
                if (deviceWidth === 500) {
                }
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
      <div className={styles.headerButtons}>
        <CircleButtonSelector
          labelText="Theme"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          img={theme === "dark" ? themeDarkIcon : themeLightIcon}
        />
        <CircleButtonSelector
          labelText="En / Fr"
          onClick={() => {
            i18n.language === "en" ? i18n.changeLanguage("fr") : i18n.changeLanguage("en");
          }}
          img={langFlag}
        />
      </div>
    </header>
  );
};
export default Header;
