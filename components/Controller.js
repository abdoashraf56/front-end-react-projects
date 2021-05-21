
function Controller({ styles, name, Icon, click }) {
    let handleClick = () => {
        click()
    }
    return (
        <div className={styles.controller} >
            <div style={{ cursor: "pointer" }} onClick={handleClick}>
                <Icon fontSize={30} />
            </div>
            <h3>{name}</h3>
        </div>
    );
}

export default Controller;