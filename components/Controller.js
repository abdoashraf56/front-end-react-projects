
function Controller({ styles, name, Icon, onClick }) {
    let handleClick = () => {
        onClick()
    }
    return (
        <div className={styles.controller} onClick={handleClick}>
            <div style={{ cursor: "pointer" }}>
                <Icon fontSize={30} />
            </div>
            <h3>{name}</h3>
        </div>
    );
}

export default Controller;