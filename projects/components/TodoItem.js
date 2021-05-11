function TodoItem({ styles, data }) {
    return (
        <div key={data.id} className={styles.todo_item_container}>
            <div className={styles.todo}>
                <div
                    className={data.compelete ? styles.todo_finish : ""}
                >{data.text}</div>
            </div>
            <button className={styles.done_btn}>&#10004;</button>
            <button className={styles.delete_btn}>X</button>
        </div>
    );
}

export default TodoItem;