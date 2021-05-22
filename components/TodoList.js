import { AnimatePresence, motion } from "framer-motion";
import TodoItem from "./TodoItem";

function TodoList({ styles, list, filter, update_todo, delete_todo }) {

    let filter_list = (list) => {
        if (filter == "All") return list

        return list.filter(todo => {
            if (filter == "Compelete") {
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
                <AnimatePresence>
                {filter_list(list)
                        .sort((a,b) => a.text.localeCompare(b.text))
                            .map(todo => {
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
                </AnimatePresence>
            </motion.div>
    );
}

export default TodoList;