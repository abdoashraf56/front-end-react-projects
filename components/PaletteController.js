import Controller from "./Controller";
import { BsArrowCounterclockwise } from 'react-icons/bs'
import { MdSave, MdBook } from 'react-icons/md'

function PaletteController({ styles, colors, update, save }) {

    let generate_color = () => {
        let random_r = Math.floor(Math.random() * 255)
        let random_b = Math.floor(Math.random() * 255)
        let random_g = Math.floor(Math.random() * 255)

        random_r = getHexValue(random_r)
        random_b = getHexValue(random_b)
        random_g = getHexValue(random_g)

        return `#` + random_r + random_b + random_g
    }

    let getHexValue = (number) => {
        let string = number.toString(16)
        if (string.length < 2) {
            string = "0" + string
        }
        return string
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