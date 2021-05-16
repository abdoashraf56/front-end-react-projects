import ColorNode from "./ColorNode";

function ColorPalette({ styles, colors, func }) {

    return (
        <div className={styles.color_palette_container}>
            {colors.map(color => {
                return <ColorNode color={color} styles={styles} lock={func} />
            })}
        </div>
    );
}

export default ColorPalette;