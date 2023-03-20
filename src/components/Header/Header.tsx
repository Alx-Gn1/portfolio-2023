import styles from "./css/Header.module.css";
import { useState } from "react";
import { closeNavDrawer, openNavDrawer } from "../../utils/functions/drawerMenu";
import hamburgerIcon from "../../assets/Hamburger_icon.svg";
import { useAppSelector } from "../../app/hooks";
import NavBar from "./NavBar";
import { useHideHeaderOnScrollDown } from "../../utils/hooks/useHideHeaderOnScrollDown";
import ThemeSelectButton from "./ThemeSelectButton";
import LangSelectButton from "./LangSelectButton";
import SwitchButton from "./SwitchButton";

const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const { userDevice } = useAppSelector((state) => state.userDevice);

  const closeDrawer = () => {
    setDrawerIsOpen(false);
    closeNavDrawer(styles);
  };
  const openDrawer = () => {
    setDrawerIsOpen(true);
    openNavDrawer(styles);
  };

  useHideHeaderOnScrollDown({ styles, userDevice });

  return (
    <header className={styles.headerContainer} id="header">
      <button
        className={styles.openDrawerButton}
        onClick={() => {
          drawerIsOpen ? closeDrawer() : openDrawer();
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
      <NavBar closeDrawer={closeDrawer} />
      <div className={styles.headerButtons}>
        {/* <SwitchButton /> */}
        {/* <SwitchButton /> */}
        <ThemeSelectButton userDevice={userDevice} />
        <LangSelectButton />
      </div>
    </header>
  );
};
export default Header;
