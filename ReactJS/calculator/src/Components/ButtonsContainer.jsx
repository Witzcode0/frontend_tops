import Buttons from './Buttons';
import styles from './ButtonsContainer.module.css'
function ButtonsContainer(){
    return (
        <div className={styles.ButtonContainer}>
            <Buttons />
        </div>
    )
}

export default ButtonsContainer;