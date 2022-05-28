import React from 'react'
import DesktopWithInfo from '../Components/DesktopWithInfo/DesktopWithInfo'
import SideMenu from '../Components/SideMenu/SideMenu'
import ModalGeneric from '../Components/ModalGeneric/ModalGeneric'
const WrappedDinamicElement=(props)=>{
    return(
        <>
            <DesktopWithInfo/>
            <SideMenu/>
            <ModalGeneric/>
            {props.children}
        </>
    )
}

export default WrappedDinamicElement