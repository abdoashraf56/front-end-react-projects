import TodoItem from "./TodoItem";

function TodoList({ styles, list }) {
    return (
        <div className={styles.todo_list_container}>
            {list.map(todo => {
                return (
                    <TodoItem data={todo} styles={styles} />
                );
            })}
        </div>
    );
}

export default TodoList;