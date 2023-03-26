import styles from "./css/SwitchButton.module.css";
import { useState } from "react";

interface Props {
  options: Array<{ name: string; image: string }>;
  onClick: Function;
  isSmall?: boolean;
}

const SwitchButton = (props: Props) => {
  const { options, onClick, isSmall } = props;
  const [selectedOption, setSelectedOption] = useState<0 | 1>(0);

  return (
    <button
      className={isSmall ? `${styles.switchButton} ${styles.small}` : styles.switchButton}
      onClick={() => {
        selectedOption ? setSelectedOption(0) : setSelectedOption(1);
        onClick();
      }}
    >
      <img
        className={`${styles.selectable} ${selectedOption === 0 ? styles.option0 : styles.option1}`}
        src={options[selectedOption].image}
        alt={options[selectedOption].name + "selector"}
      ></img>
      <span className={`${styles.optionName} ${selectedOption === 0 ? styles.option0 : styles.option1}`}>
        {options[selectedOption].name}
      </span>
    </button>
  );
};
export default SwitchButton;
