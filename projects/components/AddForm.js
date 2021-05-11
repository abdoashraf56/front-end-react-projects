import { useState } from "react";

function AddForm({ styles, add }) {
    let [text, setText] = useState('')

    let handleChange = (e => {
        let value = e.target.value
        setText(value)
    })

    let handleClick = () => {
        add({ id: 0, text, compelete: false })
        setText('')
    }

    return (
        <div className={styles.flex_row}>
            <input
                className={styles.input_form}
                type="text" maxLength={50}
                value={text}
                onChange={handleChange}
            />
            <button
                className={styles.add_btn}
                title={"+"}
                onClick={handleClick}
            >+</button>
        </div>
    );
}

export default AddForm;