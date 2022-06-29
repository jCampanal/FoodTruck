import react,{useState,useEffect} from 'react'
import {ContentDiv} from './LogMenuStyled'
import { motion, AnimatePresence } from 'framer-motion'
import LogForm from './Forms/LogForm/LogForm'
import UserForm from './Forms/newUserForm/NewUserForm'
import CodigLog from './Forms/CodigLog/CodigLog'
import ResetLooguin from './Forms/ResetLogin/ResetLoguin'

const LogMenu=()=>{    
    const [selectFrom,setSelectForm]=useState('Iniciar')
    const HandlerFormChange=(NewState)=>{
        setSelectForm(NewState)
    }
    return(
        <AnimatePresence>
                {selectFrom==='Iniciar'&&<LogForm  ChangeMenu={HandlerFormChange}/>}
                {selectFrom==='Nuevo'&&<UserForm ChangeMenu={HandlerFormChange}/>} 
                {selectFrom==='Registro'&&<CodigLog ChangeMenu={HandlerFormChange}/>}
                {selectFrom==='Reset'&&<ResetLooguin ChangeMenu={HandlerFormChange}/>}             
        </AnimatePresence>
    )
}

export default LogMenu