import { useState } from 'react'
import ColorPalette from '../components/ColorPalette'
import PaletteController from '../components/PaletteController'
import styles from '../styles/gencolor.module.scss'

function gencolor(props) {
    let num = 6 //the number of generated colors

    let [colors, setColors] = useState([
        { id: 0, color_text: '#0070f3', lock: true },
        { id: 1, color_text: '#000000', lock: false },
        { id: 2, color_text: '#a0a0f0', lock: false },
        { id: 3, color_text: '#7af7cd', lock: true },
        { id: 4, color_text: '#ffffff', lock: false },
        { id: 5, color_text: '#3dfa30', lock: false }
    ])

    let lock_or_not_color = (id) => {
        let prev = colors
        let color = prev[id]
        color.lock = !color.lock
        prev[id] = color
        setColors([...prev])
    }

    return (
        <div className={styles.container}>
            <ColorPalette styles={styles} colors={colors} func={lock_or_not_color} />
            <PaletteController styles={styles} />
        </div>
    );
}

export default gencolor;