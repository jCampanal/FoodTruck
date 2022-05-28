import React,{useState,useEffect} from 'react'
import {ButtonS} from './LoguinButtonStyled'
import { useDispatch,useSelector } from "react-redux";
import { setOpenModal, setContentModal,setTitleModal} from "../../Store/MotionGenerix/ModalGeneric";
import { selectOpen, selectContent} from "../../Store/MotionGenerix/ModalGeneric";
import LogMenu from '../LogMenu/LogMenu'
const LoguinButton=(props)=>{
    const [logueado, setLogueado]=useState(false)
    const open=useSelector(selectOpen)
    const content=useSelector(selectContent)    
    const dispatch=useDispatch()

    const HandlerInitSesion=()=>{
        dispatch(setTitleModal('Inicio de Sesión'))
        dispatch(setContentModal(<LogMenu></LogMenu>))
        setTimeout(()=>{dispatch(setOpenModal(true))},200)
        
    }

    useEffect(()=>{
        if(window.localStorage.getItem("token")){
            setLogueado(true)
        }else{
            setLogueado(false)
        }
    },[])
    return(
        <>
        {!logueado&&<ButtonS {...props} onClick={HandlerInitSesion}>
            {'Iniciar sesión'}
        </ButtonS>}
        {logueado&&<ButtonS {...props}>
            {'Cerrar sesión'}
        </ButtonS>}
        </>
    )
}

export default LoguinButton