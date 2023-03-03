import { useTranslation } from "react-i18next";
import CircleButtonSelector from "../CircleButtonSelector";
import langFlag from "../../assets/en_fr_flag.webp";

const LangSelectButton = () => {
  const { i18n } = useTranslation();
  return (
    <CircleButtonSelector
      labelText="En / Fr"
      onClick={() => {
        i18n.language === "en" ? i18n.changeLanguage("fr") : i18n.changeLanguage("en");
      }}
      img={langFlag}
    />
  );
};
export default LangSelectButton;
