import LibraryColorsItem from './LibraryColorsItem';


function Library({ styles, library_colors, toggle, update, clear }) {

    let handleClear = () => {
        clear()
    }

    return (
        <>
            <h3 style={{ alignSelf: "center" }}>Color Palette</h3>

            <div className={styles.colors_list}>
                {library_colors.map(colors => {
                    return (
                        <LibraryColorsItem toggle={toggle} styles={styles} colors={colors} update={update} />
                    );
                })}

                <div className={styles.clear} onClick={handleClear}> Clear </div>
            </div>
        </>
    );
}

export default Library;