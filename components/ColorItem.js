
function ColorItem({ color, styles }) {
    return (
        <div style={{ backgroundColor: color.color_text }} className={styles.coloritem} >

        </div>
    );
}

export default ColorItem;