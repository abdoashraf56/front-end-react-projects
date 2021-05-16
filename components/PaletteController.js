import Controller from "./Controller";
import { BsArrowCounterclockwise } from 'react-icons/bs'
import { MdSave, MdBook } from 'react-icons/md'

function PaletteController({ styles }) {
    return (
        <div className={styles.palette_controller_container}>
            <Controller
                styles={styles}
                name={"Library"}
                Icon={MdBook}
                onClick={""}
            />
            <Controller
                styles={styles}
                name={"Generate"}
                Icon={BsArrowCounterclockwise}
                onClick={""}
            />
            <Controller
                styles={styles}
                name={"Save"}
                Icon={MdSave}
                onClick={""}
            />

        </div>
    );
}

export default PaletteController;