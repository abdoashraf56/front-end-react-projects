import { useState } from 'react';
import AddForm from '../components/AddForm';
import FilterForm from '../components/FilterForm';
import TodoList from '../components/TodoList';
import styles from '../styles/todo.module.scss'

function todo(props) {
    let [todos, setTodos] = useState([
        { id: 0, text: "Learn C++", compelete: true },
        { id: 1, text: "Learn C#", compelete: false },
        { id: 2, text: "Learn javascript", compelete: false },
    ])
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The TODO APP</h1>

            <div className={styles.add_filter_container}>
                <AddForm styles={styles} />
                <FilterForm styles={styles} />
            </div>

            <TodoList styles={styles} list={todos} />
        </div>
    );
}

export default todo;