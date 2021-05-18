import { MdClose } from 'react-icons/md'
import LibraryColorsItem from './LibraryColorsItem';
function Library({ styles, library_colors, toggle, update }) {

    let handleToggle = () => {
        toggle()
    }
    return (
        <div className={styles.library_bg}>
            <div className={styles.library_container}>
                <div onClick={handleToggle} className={styles.close_btn}>
                    <MdClose fontSize={20} />
                </div>

                <h3 style={{ alignSelf: "center" }}>Color Palette</h3>

                <div className={styles.colors_list}>
                    {library_colors.map(colors => {
                        return (
                            <LibraryColorsItem styles={styles} colors={colors} update={update} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Library;