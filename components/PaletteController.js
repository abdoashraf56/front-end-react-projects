import Controller from "./Controller";
import { BsArrowCounterclockwise } from 'react-icons/bs'
import { MdSave, MdBook, MdExposurePlus1, MdExposureNeg1 } from 'react-icons/md'
import Library from "./Library";
import { useState } from "react";
import Model from "./Model/Model";

function PaletteController({ styles, colors, library_colors,
    update, save, clear }) {

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


    let [showModelLibrary, setShowModelLibrary] = useState(false)

    let toggle_model_library = () => {
        setShowModelLibrary(!showModelLibrary)
    }


    let [showModelSave, setShowModelSave] = useState(false)

    let toggle_model_Save = () => {
        if (!showModelSave) save()
        setShowModelSave(!showModelSave)
    }

    let increase_color = () => {
        if (colors.length >= 6) {
            alert("The Max numbers has been reached")
            return;
        };
        let color_text = generate_color()
        let c = { id: colors.length, color_text, lock: false }
        colors.push(c)
        update(colors);
    }

    let decrease_color = () => {
        if (colors.length <= 1) {
            alert("The Min numbers has been reached")
            return;
        };
        let index = colors.findIndex(c => c.lock == false)
        if (index == -1) {
            alert("Can't revmove locked color if you want unlock it")
            return;
        }
        colors.splice(index, 1)
        update(colors);
    }

    return (
        <div className={styles.palette_controller_container}>
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
                click={toggle_model_Save}
            />

            {showModelSave &&
                <Model toggle={toggle_model_Save}>
                    <h3 style={{ alignSelf: "center" }}>Save Done To The Library  &#128077;</h3>
                    <div onClick={toggle_model_Save} className={styles.okay}>Okay</div>
                </Model>
            }

            <Controller
                styles={styles}
                name={"Increase"}
                Icon={MdExposurePlus1}
                click={increase_color}
            />

            <Controller
                styles={styles}
                name={"Decrease"}
                Icon={MdExposureNeg1}
                click={decrease_color}
            />

            <Controller
                styles={styles}
                name={"Library"}
                Icon={MdBook}
                click={toggle_model_library}
            />


            {showModelLibrary &&
                <Model toggle={toggle_model_library}>
                    <Library

                        styles={styles}
                        library_colors={library_colors}
                        toggle={toggle_model_library}
                        update={update}
                        clear={clear}
                    />
                </Model>
            }



        </div>
    );
}

export default PaletteController;