import ColorItem from "./ColorItem";

function LibraryColorsItem({ styles, colors, update }) {

    let handleClick = () => {
        console.log(colors)
        update(colors)
    }

    return (
        <div className={styles.library_colors_container}>
            <div className={styles.library_colors}>
                {colors.map(color => {
                    return (
                        <ColorItem color={color} styles={styles} />
                    );
                })}
            </div>

            <div className={styles.show} onClick={handleClick}>
                Show
            </div>
        </div>
    );
}

export default LibraryColorsItem;