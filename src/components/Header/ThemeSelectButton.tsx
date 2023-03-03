import themeDarkIcon from "../../assets/theme_dark.webp";
import themeLightIcon from "../../assets/theme_light.webp";
import { useTranslation } from "react-i18next";
import CircleButtonSelector from "../CircleButtonSelector";
import setAppTheme from "../../utils/functions/setAppTheme";
import { useState } from "react";

const ThemeSelectButton = (props: { userDevice: string }) => {
  const { userDevice } = props;
  const [theme, setTheme] = useState("light");
  setAppTheme(theme);
  const { t } = useTranslation();
  return (
    <CircleButtonSelector
      labelText="Theme"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      img={
        theme === "dark"
          ? userDevice === "mobile"
            ? themeLightIcon
            : themeDarkIcon
          : userDevice === "mobile"
          ? themeDarkIcon
          : themeLightIcon
      }
    />
  );
};
export default ThemeSelectButton;
