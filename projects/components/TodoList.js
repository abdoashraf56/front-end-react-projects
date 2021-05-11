import TodoItem from "./TodoItem";

function TodoList({ styles, list, filter }) {

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
    return (
        <div className={styles.todo_list_container}>
            {filter_list(list).map(todo => {
                return (
                    <TodoItem key={todo.id} data={todo} styles={styles} />
                );
            })}
        </div>
    );
}

export default TodoList;