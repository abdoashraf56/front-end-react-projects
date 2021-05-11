function TodoItem({ styles, data, update_todo, delete_todo }) {

    let handle_update = () => {
        data.compelete = true
        update_todo(data)
    }


    let handle_delete = () => {
        delete_todo(data)
    }

    return (
        <div key={data.id} className={styles.todo_item_container}>
            <div className={data.compelete ? styles.todo_finish : styles.todo}>
                <div
                    className={data.compelete ? styles.todo_text_finish : ""}
                >{data.text}</div>
            </div>

            {data.compelete ? (<></>) :
                <button
                    onClick={handle_update}
                    className={styles.done_btn}
                >&#10004;</button>
            }


            <button onClick={handle_delete} className={styles.delete_btn}>X</button>
        </div>
    );
}

export default TodoItem;