
import { useEffect, useState } from 'react';
import AddForm from '../components/AddForm';
import FilterForm from '../components/FilterForm';
import Splash from '../components/Splash';
import TodoList from '../components/TodoList';
import styles from '../styles/todo.module.scss';
import Store from 'store-js';

function todo(props) {
    let [filter_by, setFilter] = useState('All')

    let [theme, setTheme] = useState()

    let [todos, setTodos] = useState([

    ])

    let add_todo_to_list = (todo) => {
        let last_id = todos.length;
        todo.id = last_id
        let new_todo = [...todos, todo]
        Store.set('todos', new_todo)
        setTodos(new_todo)
    }

    let update_todo_in_list = (todo) => {
        let prev = todos.filter(t => {
            if (t.id == todo.id) return todo
            return t
        })
        let update_todo = [...prev]
        Store.set('todos', update_todo)
        setTodos(update_todo);
    }

    let delete_todo_in_list = (todo) => {
        let prev = todos.filter(t => {
            if (t.id != todo.id) return t
        })
        let update_todo = [...prev]
        Store.set('todos', update_todo)
        setTodos(update_todo);
    }

    let change_filter_value = (value) => {
        setFilter(value)
    }

    let handleThemeChange = () => {
        let value = !theme;
        Store.set('theme', value)
        setTheme(value)
    }

    let get_storage_values = () => {
        let theme = Store.get('theme')
        if (theme === undefined) {
            setTheme(true)
        } else {
            setTheme(theme)
        }
        let saved_todos = Store.get('todos')
        if (saved_todos) setTodos(saved_todos)
    }

    useEffect(() => {
        get_storage_values()
    }, [])


    return (
        <div className={theme ? styles.light : styles.dark}>

            <div className={styles.splash_container}>
                <Splash styles={styles} />
            </div>

            <div className={styles.container}>
                <label className={styles.switch}>
                    <input type="checkbox" onChange={handleThemeChange} />
                    <span className={styles.slider}></span>
                </label>
                <div className={styles.header_container}>
                    <h1 className={styles.title}>The TODO APP</h1>
                    <div className={styles.add_filter_container}>
                        <AddForm styles={styles} add={add_todo_to_list} />
                        <FilterForm
                            styles={styles}
                            change_value={change_filter_value}
                            options={["All", "Compelete", "Uncomplete"]}
                        />
                    </div>
                </div>

                <TodoList
                    styles={styles}
                    list={todos}
                    filter={filter_by}
                    update_todo={update_todo_in_list}
                    delete_todo={delete_todo_in_list}
                />
            </div>
        </div>
    );
}

export default todo;