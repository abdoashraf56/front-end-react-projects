
function AddForm({ styles }) {
    return (
        <div className={styles.flex_row}>
            <input className={styles.input_form} type="text" maxLength={50} />
            <button className={styles.add_btn} title={"+"}>+</button>
        </div>
    );
}

export default AddForm;