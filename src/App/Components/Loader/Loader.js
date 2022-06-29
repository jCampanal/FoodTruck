import React from 'react' 
import { motion } from 'framer-motion'
import {LoaderS} from './LoaderStyled'

const LoadVariants={
    AnimationOne:{
        x:[20,-20],
        y:[30,0],
        transition:{
            x:{
                yoyo:Infinity,
                duration:0.5
            },
            y:{
                yoyo:Infinity,
                duration:0.25
            }
        }
    }
}

 const Loader=(props)=>{

    return(
        <>
        <LoaderS 
            {...props}
            as={motion.div}
            variants={LoadVariants}
            animate={'AnimationOne'}>

        </LoaderS>
        </>
    )
}

export default Loader


