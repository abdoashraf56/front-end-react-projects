import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react';

 function Splash({ styles }) {
    const animate = useAnimation()

    let v1 = {
        animate : { 
            height: 0, 
            opacity: 0  ,
            transition:{ duration: 3, when: "afterChildren" , delay : 2 }
        } ,
        inital : {
            
        }
    }
 
    useEffect(async ()=>{
        await animate.start({
            rotateY : 180,
            x : 0,
            transition : {
                duration : 1
            }
        })

        animate.start(
            {
                rotateY : 0,
                backgroundColor : "white", 
                color : "#00bea3",
                transition : {
                duration : 1
                }       
            }
        )

    }, [])


    
    return (
        <motion.div className={styles.splash}
            variants = {v1}
            animate="animate"
        >

            <motion.button
                className={styles.mark}
                initial={{
                    x: '-30%'
                }}

                animate={animate}
                
                transition={{
                    delay: .3
                }}
            >
                &#10004;
            
            </motion.button>
            <motion.h3
                initial={{
                    x: '30%'
                }}

                animate={{
                    x: 0
                }}

                transition={{
                    delay: .3
                }}
            >
                Todo app
            </motion.h3>
        </motion.div>
    );
}

export default Splash;