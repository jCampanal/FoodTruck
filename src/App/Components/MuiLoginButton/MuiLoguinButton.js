import React from 'react'
import { Button } from "@mui/material";
import { ButtonSX } from './MuiLoginButtonStyled';
import { useDispatch,useSelector } from "react-redux";
import { setOpenModal, setContentModal,setTitleModal} from "../../Store/MotionGenerix/ModalGeneric";
import { selectOpen, selectContent} from "../../Store/MotionGenerix/ModalGeneric";
import { logout } from "../../Store/auth/authorizationSlice";
import { selectUserName, selectStatus} from "../../Store/auth/authorizationSlice"
import LogMenu from '../LogMenu/LogMenu'

const MuiLoginButton=(props)=>{
    const Login=useSelector(selectStatus)
    const dispatch= useDispatch()

    const HandlerInitSesion=()=>{
        props.Close()
        setTimeout(()=>{
        dispatch(setTitleModal('Inicio de Sesión'))
        dispatch(setContentModal(<LogMenu></LogMenu>))
        setTimeout(()=>{dispatch(setOpenModal(true))},200)},1000)
        
    }

    const HandlerLogout=()=>{
        dispatch(logout())
    }

    return(
        <>
       {!Login&&<Button sx={ButtonSX} onClick={()=>{HandlerInitSesion()}}>
            Iniciar
        </Button>}
        {Login&&<Button sx={ButtonSX} onClick={()=>{HandlerLogout()}}>
            Cerrar
        </Button>}
        </>
    )

}

export default MuiLoginButton