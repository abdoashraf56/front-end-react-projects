function FilterForm({ styles }) {
    return (
        <div className={styles.custom_select}>
            <select >
                <option value={"All"}>ALL</option>
                <option value={"Complete"}>Complete</option>
                <option value={"Unomplete"}>Unomplete</option>
            </select>
        </div>
    );
}

export default FilterForm;