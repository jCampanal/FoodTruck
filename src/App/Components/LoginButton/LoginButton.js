import React,{useState,useEffect} from 'react'
import {ButtonS} from './LoguinButtonStyled'
import { useDispatch,useSelector } from "react-redux";
import { setOpenModal, setContentModal,setTitleModal} from "../../Store/MotionGenerix/ModalGeneric";
import { selectOpen, selectContent} from "../../Store/MotionGenerix/ModalGeneric";
import { logout } from "../../Store/auth/authorizationSlice";
import { selectUserName, selectStatus} from "../../Store/auth/authorizationSlice"
import LogMenu from '../LogMenu/LogMenu'
import {setOpenNotification,setContentNotification,setStatusNotification} from '../../Store/NotificationDiv/NotificationDiv'

const LoguinButton=(props)=>{
    const [logueado, setLogueado]=useState(false)    
     
    const dispatch=useDispatch()
    const Status= useSelector(selectStatus)
    const HandlerInitSesion=()=>{
        dispatch(setTitleModal('Inicio de Sesión'))
        dispatch(setContentModal(<LogMenu></LogMenu>))
        setTimeout(()=>{dispatch(setOpenModal(true))},200)
        
    }


    const HandlerLogout=()=>{
        dispatch(logout())
        dispatch(setContentNotification('Sección finalizada'))
        dispatch(setStatusNotification('succ'))
        dispatch(setOpenNotification(true))
    }

    return(
        <>
        {!Status&&<ButtonS {...props} onClick={HandlerInitSesion}>
            {'Iniciar sesión'}
        </ButtonS>}
        {Status&&<ButtonS {...props} onClick={HandlerLogout}>
            {'Cerrar sesión'}
        </ButtonS>}
        </>
    )
}

export default LoguinButton