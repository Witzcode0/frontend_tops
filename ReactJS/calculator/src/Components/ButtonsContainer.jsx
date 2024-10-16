import styles from "./ButtonsContainer.module.css";
function ButtonsContainer({ onButtonClick }) {
  const keys = [
    "C", "<<", "%","/",
    "7", "8", "9" ,"*",
    "4","5","6","-",
    "1","2","3", "+",
    "0", ".", "="
  ];

  return (
    <div className={styles.ButtonContainer}>
      {keys.map(key =>
        <button className={styles.Btn} onClick={() => onButtonClick(key)}>
          {key}
        </button>
      )}
    </div>
  );
}

export default ButtonsContainer;
