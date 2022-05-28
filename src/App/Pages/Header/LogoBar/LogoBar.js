import React from 'react'
import {
    ConteinedLogo,
    Logo,
    Name,
    DivContentLogo,
    DivContentNav
}from './LogoBarStyle' 
import NavIcon from '../../../Components/NavIcon/NavIcon'
import Icono from '../../../../Assets/icono.png'

const LogoBar =()=>{
    return(
        <ConteinedLogo>
            <DivContentLogo>
                <Logo src={Icono}/>
                <Name>Estilos</Name>
            </DivContentLogo>
            <DivContentNav>
                <NavIcon Color={'black'}/>
            </DivContentNav>
        </ConteinedLogo>
    )
}

export default LogoBar