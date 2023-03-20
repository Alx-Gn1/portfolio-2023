import { useTranslation } from "react-i18next";
import SwitchButton from "./SwitchButton";
import { useEffect, useRef } from "react";
import frFlag from "../../assets/switch-icon/french.png";
import enFlag from "../../assets/switch-icon/english.png";
import { useAppSelector } from "../../app/hooks";

const LangSelectButton = () => {
  const { userDevice } = useAppSelector((state) => state.userDevice);
  const { i18n } = useTranslation();
  const optionsList = [
    { name: "En", image: enFlag },
    { name: "Fr", image: frFlag },
  ];
  const langOptions = useRef<Array<{ name: string; image: string }>>(
    i18n.resolvedLanguage === "en" ? optionsList : optionsList.reverse()
  );
  return (
    <SwitchButton
      options={langOptions.current}
      onClick={() => {
        i18n.language === "en" ? i18n.changeLanguage("fr") : i18n.changeLanguage("en");
      }}
      isSmall={userDevice === "mobile" ? true : false}
    />
  );
};
export default LangSelectButton;
