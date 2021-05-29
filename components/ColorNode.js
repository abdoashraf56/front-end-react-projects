import { BsFillUnlockFill, BsFillLockFill } from 'react-icons/bs'
import { MdTune } from 'react-icons/md'


function ColorNode({ styles, color, lock, toggle }) {

    let handleClick = () => {
        lock(color.color_text)
    }

    let handleAdjust = () => {

    }

    let handleColorTextClick = async (e) => {
        await navigator.clipboard.writeText(e.currentTarget.innerText)

        toggle()
    }

    let colorCenter = 16777215 / 3

    let convert = color.color_text.replace("#", "0x")

    let colorValue = parseInt(convert, 16)

    let backColor = colorValue > colorCenter ? "black" : "white"

    return (
        <div className={styles.colornode} style={{ backgroundColor: color.color_text }}>
            <h4
                style={{ color: backColor }}
                className={styles.color_title}
                onClick={handleColorTextClick}
            >{color.color_text}</h4>



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