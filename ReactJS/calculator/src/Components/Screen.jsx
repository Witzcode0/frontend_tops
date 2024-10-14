import styles from './Screen.module.css';
function Screen(){
    return (
        <div className={styles.mainScreen}>
            <input type="text" className={styles.inputBox} placeholder='0.0'/>
        </div>
    )
}

export default Screen;