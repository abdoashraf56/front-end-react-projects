import { BsFillUnlockFill, BsFillLockFill } from 'react-icons/bs'
import { MdTune } from 'react-icons/md'


function ColorNode({ styles, color, lock }) {

    let handleClick = () => {
        lock(color.id)
    }

    let handleAdjust = () => {

    }

    let colorCenter = 16777215 / 7

    let convert = color.color_text.replace("#", "0x")

    let colorValue = parseInt(convert)

    let backColor = colorValue > colorCenter ? "black" : "white"

    return (
        <div className={styles.colornode} style={{ backgroundColor: color.color_text }}>
            <h4 style={{ color: backColor }} className={styles.color_title}>{color.color_text}</h4>



            <div onClick={handleAdjust} style={{ cursor: "pointer" }}>
                <MdTune fontSize={20} fill={backColor} />
            </div>

            <div onClick={handleClick} style={{ cursor: "pointer" }}>
                {color.lock ?
                    <BsFillLockFill fontSize={20} fill={backColor} /> :
                    <BsFillUnlockFill fontSize={20} fill={backColor} />
                }
            </div>
        </div>
    );
}

export default ColorNode;