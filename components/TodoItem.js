import { motion } from 'framer-motion'
function TodoItem({ styles, data, update_todo, delete_todo }) {

    let handle_update = () => {
        data.compelete = true
        update_todo(data)
    }


    let handle_delete = () => {
        delete_todo(data)
    }

    return (
        <motion.div
            initial={{ x: -50, width: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1, width: "100%" }}
            exit={{ x: -50, width: "60%", opacity: 0 }}
            key={data.id} className={styles.todo_item_container}
        >
            {data.compelete ?
                <motion.div
                    animate={{ backgroundColor: "rgb(182, 182, 182)", transition: { duration: .3 } }}
                    className={styles.todo}>
                    <motion.div
                        animate={{ textDecoration: "line-through", transition: { duration: .3 } }}
                        className={styles.todo_text}
                    >{data.text}</motion.div>
                </motion.div>
                :
                <div className={styles.todo}>
                    <div
                        className={styles.todo_text}
                    >{data.text}</div>
                </div>
            }


            {data.compelete ? (<></>) :
                <button
                    onClick={handle_update}
                    className={styles.done_btn}
                >&#10004;</button>
            }


            <button onClick={handle_delete} className={styles.delete_btn}>X</button>
        </motion.div>
    );
}

export default TodoItem;