import React from 'react' 
import {
    FirstDivLoguin,
    SecondDivLoguin,
    ThirdDivLoguin
}from './LoginBarStyled'
import LoguinButton from '../../../Components/LoginButton/LoginButton'
import UsuarioName from './UsuarioName/UsuarioName'
const LoginBar=()=>{
    return(
        <FirstDivLoguin>
            <SecondDivLoguin>
               
                    <UsuarioName Hidden={false} />
                
                    <LoguinButton Hidden={true} Color={'#1976d2'}/>
                                
            </SecondDivLoguin>
        </FirstDivLoguin>
    )
}

export default LoginBar