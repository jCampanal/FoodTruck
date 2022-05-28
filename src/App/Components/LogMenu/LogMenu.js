import react,{useState,useEffect} from 'react'
import {ContentDiv} from './LogMenuStyled'
import { motion, AnimatePresence } from 'framer-motion'
import LogForm from './Forms/LogForm/LogForm'
import UserForm from './Forms/newUserForm/NewUserForm'

const LogMenu=()=>{
    console.log(<UserForm/>)
    const [selectFrom,setSelectForm]=useState('Iniciar')
    const HandlerFormChange=(NewState)=>{
        setSelectForm(NewState)
    }
    return(
        <AnimatePresence>
                {selectFrom==='Iniciar'&&<LogForm  ChangeMenu={HandlerFormChange}/>}
                {selectFrom==='Nuevo'&&<UserForm ChangeMenu={HandlerFormChange}/>}            
        </AnimatePresence>
    )
}

export default LogMenu