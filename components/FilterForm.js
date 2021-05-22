import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'
import Option from './Option';
import { motion, AnimatePresence } from 'framer-motion'

function FilterForm({ styles, change_value, options }) {

    let [show, setShow] = useState(false)

    let [value, setValue] = useState(options[0])

    let handleChange = (value) => {
        setShow(!show)
        setValue(value)
        change_value(value)
    }

    let handleToggle = () => {
        setShow(!show)
    }

    return (

        <div className={styles.select_container} onClick={handleToggle}>
            <div className={styles.select_value}>{value}</div>

            <AnimatePresence exitBeforeEnter>
                {show &&
                    <motion.div
                        className={styles.option_container}
                        initial={{ y: -20, height: 0, opacity: 0 }}
                        animate={{ y: 0, height: "auto", opacity: 1 }}
                        exit={{ y: -20, height: 0, opacity: 0 }}
                        transition={{ duration: .2 }}
                    >
                        {options.map(option => {
                            return <Option
                                title={option}
                                styles={styles}
                                change={handleChange}
                            />
                        })}
                    </motion.div>
                }
            </AnimatePresence>
            <div className={styles.arrow_container}>
                <BsChevronDown fontSize={20} />
            </div>
        </div>
    );
}

export default FilterForm;