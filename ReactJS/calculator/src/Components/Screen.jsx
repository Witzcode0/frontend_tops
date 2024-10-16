import styles from "./Screen.module.css";
function Screen({ screenVal }) {
  return (
    <div className={styles.mainScreen}>
      <input
        type="text"
        className={styles.inputBox}
        placeholder="0.0"
        value={screenVal}
        readOnly
      />
    </div>
  );
}

export default Screen;
