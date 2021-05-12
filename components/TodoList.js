import { motion } from "framer-motion";
import TodoItem from "./TodoItem";

function TodoList({ styles, list, filter, update_todo, delete_todo }) {

    let filter_list = (list) => {
        if (filter == "All") return list

        return list.filter(todo => {
            if (filter == "Complete") {
                return todo.compelete == true
            } else {
                return todo.compelete == false
            }
        })
    }


    //Check of the list is empty and retrun feedback 
    if(list.length == 0){
        return (<h3 className={styles.subtitle}>It's same empty Add More TODO .. </h3>);
    }


    return (
        <motion.div layout className={styles.todo_list_container} style={{
            overflow : list.length > 5 ? "scroll" : ""
        }}>
            {filter_list(list).map(todo => {
                return (
                    <TodoItem
                        key={todo.id}
                        data={todo}
                        styles={styles}
                        update_todo={update_todo}
                        delete_todo={delete_todo}
                    />
                );
            })}
        </motion.div>
    );
}

export default TodoList;