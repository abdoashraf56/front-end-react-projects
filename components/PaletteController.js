import Controller from "./Controller";
import { BsArrowCounterclockwise } from 'react-icons/bs'
import { MdSave, MdBook } from 'react-icons/md'

function PaletteController({ styles, colors, update, save }) {

    let generate_color = () => {
        let random = Math.floor(Math.random() * 16777215)
        let hex_value = random.toString(16)
        return "#" + hex_value
    }

    let generate = () => {
        for (const color of colors) {
            if (!color.lock) {
                let color_text = generate_color()
                color.color_text = color_text
            }
        }
        update(colors)
    }

    return (
        <div className={styles.palette_controller_container}>
            <Controller
                styles={styles}
                name={"Library"}
                Icon={MdBook}
                click={""}
            />
            <Controller
                styles={styles}
                name={"Generate"}
                Icon={BsArrowCounterclockwise}
                click={generate}
            />
            <Controller
                styles={styles}
                name={"Save"}
                Icon={MdSave}
                click={save}
            />

        </div>
    );
}

export default PaletteController;