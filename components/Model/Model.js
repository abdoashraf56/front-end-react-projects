import { MdClose } from 'react-icons/md'
import styles from './Model.module.scss'
function Model({ children, toggle }) {
    let handleToggle = () => {
        toggle()
    }
    return (
        <div className={styles.model_bg}>
            <div className={styles.model_container}>
                <div onClick={handleToggle} className={styles.close_btn}>
                    <MdClose fontSize={20} />
                </div>

                {children}
            </div>
        </div>
    );
}

export default Model;