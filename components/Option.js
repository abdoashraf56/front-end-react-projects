
function Option({ title, styles, change }) {

    let handleClick = () => {
        change(title)
    }

    return (
        <div className={styles.option} onClick={handleClick}>
            {title}
        </div>
    );
}

export default Option;