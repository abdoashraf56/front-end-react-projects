import LibraryColorsItem from './LibraryColorsItem';
function Library({ styles, library_colors, toggle, update }) {

    return (
        <>
            <h3 style={{ alignSelf: "center" }}>Color Palette</h3>

            <div className={styles.colors_list}>
                {library_colors.map(colors => {
                    return (
                        <LibraryColorsItem toggle={toggle} styles={styles} colors={colors} update={update} />
                    );
                })}
            </div>
        </>
    );
}

export default Library;