import { useState } from 'react';
import AddForm from '../components/AddForm';
import FilterForm from '../components/FilterForm';
import TodoList from '../components/TodoList';
import styles from '../styles/todo.module.scss'

function todo(props) {
    let [filter_by, setFilter] = useState('All')

    let [todos, setTodos] = useState([
        { id: 0, text: "Learn C++", compelete: true },
        { id: 1, text: "Learn C#", compelete: false },
        { id: 2, text: "Learn javascript", compelete: false },
    ])

    let add_todo_to_list = (todo) => {
        let last_id = todos.length;
        todo.id = last_id
        setTodos([...todos, todo])
    }

    let change_filter_value = (value) => {
        setFilter(value)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The TODO APP</h1>

            <div className={styles.add_filter_container}>
                <AddForm styles={styles} add={add_todo_to_list} />
                <FilterForm styles={styles} change_value={change_filter_value} />
            </div>

            <TodoList styles={styles} list={todos} filter={filter_by} />
        </div>
    );
}

export default todo;