import React,{useState,useEffect} from 'react' 
import {
    ContentDivS,
    DivVariant,H3S
} from './NotificationDivStyled'
import { motion } from 'framer-motion'
import { useDispatch,useSelector } from 'react-redux'
import {setOpenNotification,setContentNotification} from '../../Store/NotificationDiv/NotificationDiv'
import {selectOpenNotification,selectContent,selectStatus} from '../../Store/NotificationDiv/NotificationDiv'

const NotificationDiv=(props)=>{
    const dispatch=useDispatch()
    const transition=useSelector(selectOpenNotification)
    const text=useSelector(selectContent)
    const Status=useSelector(selectStatus)
    console.log(Status)
   
    useEffect(()=>{
        if(transition){
            setTimeout(()=>{dispatch(setOpenNotification(false))},3000)
        }
    },[transition])

    return(
        <ContentDivS as={motion.div}
                     variants={DivVariant}
                     initial={false}                     
                     animate={transition?'Show':'Hidden'}
                     transition={{duration: 1, times: [0.3,0.7] }}
                     Color={Status==='fall'?'#ff1717fa':Status==='succ'?'#2c8b14c4':false}>
            <H3S>{text}</H3S>
        </ContentDivS>
    )
}

export default NotificationDiv