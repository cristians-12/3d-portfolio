import React from 'react'
import {styles} from '../style'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component,idNombre)=>{
    function HOC(){
        return(
            <motion.div
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{once:true, amount:0.25}}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <Component/>
            </motion.div>
        )
    }
}

export default SectionWrapper