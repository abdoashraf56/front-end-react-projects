import { useEffect, useState } from 'react'
import ColorPalette from '../components/ColorPalette'
import PaletteController from '../components/PaletteController'
import styles from '../styles/gencolor.module.scss'
import Store from 'store-js'

function gencolor(props) {
    let num = 6 //the number of generated colors

    let [colors, setColors] = useState([
        { color_text: '#48404e', lock: true },
        { color_text: '#000000', lock: false },
        { color_text: '#a0a0f0', lock: false },
        { color_text: '#7af7cd', lock: true },
        { color_text: '#ffffff', lock: false },
        { color_text: '#272432', lock: false }
    ])

    let [library, setLibrary] = useState([

    ])


    let save_to_library = () => {
        let prev = library
        if (!prev.includes(colors)) {
            prev.push(colors.map(c => { return { ...c } }));
        }
        let new_lib = [...prev]
        Store.set('lib', new_lib)
        setLibrary(new_lib)
    }

    let clear_lib = () => {
        Store.remove('lib')
        setLibrary([])
    }

    let lock_or_not_color = (color_text) => {
        let prev = colors
        let color = prev.find(c => c.color_text == color_text)
        color.lock = !color.lock
        prev[color_text] = color
        setColors([...prev])
    }

    let update_color = (colors) => {
        setColors([...colors])
    }



    useEffect(() => {
        let saved_lib = Store.get('lib')
        if (saved_lib) setLibrary(saved_lib)
    }, [])

    return (
        <div className={styles.container}>
            <ColorPalette styles={styles} colors={colors} func={lock_or_not_color} />
            <PaletteController
                styles={styles}
                colors={colors}
                library_colors={library}
                update={update_color}
                save={save_to_library}
                clear={clear_lib}
            />
        </div>
    );
}

export default gencolor;