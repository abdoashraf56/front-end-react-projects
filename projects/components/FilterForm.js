function FilterForm({ styles, change_value }) {

    let handleChange = (e) => {
        change_value(e.target.value)
    }

    return (
        <div className={styles.custom_select}>
            <select onChange={handleChange}>
                <option value={"All"}>ALL</option>
                <option value={"Complete"}>Complete</option>
                <option value={"Uncomplete"}>Uncomplete</option>
            </select>
        </div>
    );
}

export default FilterForm;