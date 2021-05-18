import { useState } from 'react'
import ColorPalette from '../components/ColorPalette'
import PaletteController from '../components/PaletteController'
import styles from '../styles/gencolor.module.scss'

function gencolor(props) {
    let num = 6 //the number of generated colors

    let [colors, setColors] = useState([
        { id: 0, color_text: '#48404e', lock: true },
        { id: 1, color_text: '#000000', lock: false },
        { id: 2, color_text: '#a0a0f0', lock: false },
        { id: 3, color_text: '#7af7cd', lock: true },
        { id: 4, color_text: '#ffffff', lock: false },
        { id: 5, color_text: '#272432', lock: false }
    ])

    let [library, setLibrary] = useState([

    ])


    let save_to_library = () => {
        let prev = library
        if (!prev.includes(colors)) {
            prev.push(colors.map(c => { return { ...c } }));
        }
        setLibrary([...prev])
    }

    let lock_or_not_color = (id) => {
        let prev = colors
        let color = prev[id]
        color.lock = !color.lock
        prev[id] = color
        setColors([...prev])
    }

    let update_color = (colors) => {
        setColors([...colors])
    }

    return (
        <div className={styles.container}>
            <ColorPalette styles={styles} colors={colors} func={lock_or_not_color} />
            <PaletteController
                styles={styles}
                colors={colors}
                library_colors={library}
                update={update_color}
                save={save_to_library}
            />
        </div>
    );
}

export default gencolor;