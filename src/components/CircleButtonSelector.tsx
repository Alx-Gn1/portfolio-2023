import styles from "./css/CircleButtonSelector.module.css";

interface Props {
  onClick: Function;
  img: string;
  labelText: string;
}

const CircleButtonSelector = (props: Props) => {
  const { onClick, img, labelText } = props;
  return (
    <div className={styles.container}>
      <button
        id={"set" + labelText}
        onClick={() => {
          onClick();
        }}
        className={styles.headerButton}
      >
        <img src={img} alt="Flag for english and French language" />
      </button>
      <label htmlFor={"set" + labelText}>{labelText}</label>
    </div>
  );
};
export default CircleButtonSelector;
