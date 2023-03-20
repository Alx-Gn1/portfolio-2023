import { useTranslation } from "react-i18next";
import setAppTheme from "../../utils/functions/setAppTheme";
import { useState } from "react";
import SwitchButton from "./SwitchButton";
import darkThemeLightIcon from "../../assets/switch-icon/dark-light.png";
import darkThemeDarkIcon from "../../assets/switch-icon/dark-dark.png";
import lightThemeLightIcon from "../../assets/switch-icon/light-light.png";
import lightThemeDarkIcon from "../../assets/switch-icon/light-dark.png";

const ThemeSelectButton = (props: { userDevice: string }) => {
  const { userDevice } = props;
  const [theme, setTheme] = useState("light");
  setAppTheme(theme);
  const { t } = useTranslation();
  return (
    <SwitchButton
      options={[
        { name: "Dark", image: userDevice !== "mobile" ? darkThemeLightIcon : darkThemeDarkIcon },
        { name: "Light", image: userDevice !== "mobile" ? lightThemeDarkIcon : lightThemeLightIcon },
      ]}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    />
  );
};
export default ThemeSelectButton;
