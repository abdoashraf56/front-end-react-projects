import styles from '../styles/todo.module.scss'

function todo(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The TODO APP</h1>
        </div>
    );
}

export default todo;