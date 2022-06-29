import React from 'react' 
import {H4S} from './UsuarioNameStyled'
import { useSelector } from "react-redux";
import { selectUserName } from '../../../../Store/auth/authorizationSlice';

const UsuarioName=(props)=>{
    const NAme=useSelector(selectUserName)
    return(
      <H4S {...props}>{NAme}</H4S>  
    )
}

export default UsuarioName