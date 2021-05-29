import { useState } from "react";
import ColorNode from "./ColorNode";
import Model from "./Model/Model";

function ColorPalette({ styles, colors, func }) {

    let [showCopyModel, setShowCopyModel] = useState(false)

    let handleToggle = () => {
        setShowCopyModel(!showCopyModel)
    }

    return (
        <div className={styles.color_palette_container}>
            {colors.map(color => {
                return <ColorNode
                    key={color.id}
                    color={color}
                    styles={styles}
                    lock={func}
                    toggle={handleToggle}
                />
            })}

            {showCopyModel &&
                <Model toggle={handleToggle}>
                    <h3 style={{ alignSelf: "center" }}>Copied to your Clipboard  &#128077;</h3>
                    <div onClick={handleToggle} className={styles.okay}>Okay</div>
                </Model>
            }
        </div>
    );
}

export default ColorPalette;