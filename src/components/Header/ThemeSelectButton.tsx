import setAppTheme from "../../utils/functions/setAppTheme";
import { useState } from "react";
import SwitchButton from "./SwitchButton";
import darkThemeLightIcon from "../../assets/switch-icon/dark-light.webp";
import darkThemeDarkIcon from "../../assets/switch-icon/dark-dark.webp";
import lightThemeLightIcon from "../../assets/switch-icon/light-light.webp";
import lightThemeDarkIcon from "../../assets/switch-icon/light-dark.webp";

const ThemeSelectButton = (props: { userDevice: string }) => {
  const { userDevice } = props;
  const [theme, setTheme] = useState("light");
  setAppTheme(theme);
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
