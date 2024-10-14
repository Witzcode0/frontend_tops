import styles from './Buttons.module.css';
const Buttons = () => {
    const keys = [
      "C",
      "1",
      "2",
      "+",
      "3",
      "4",
      "-",
      "5",
      "6",
      "*",
      "7",
      "8",
      "/",
      "=",
      "9",
      "0",
      ".",
      "%"
    ];
  
    return (
        <>
        {keys.map((key) => (
          <button key={key} className={styles.Btn}>{key}</button>
        ))}
        </>
    );
  };
  
  export default Buttons;
  