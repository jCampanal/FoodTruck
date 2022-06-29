import React from 'react'
import DesktopWithInfo from '../Components/DesktopWithInfo/DesktopWithInfo'
import SideMenu from '../Components/SideMenu/SideMenu'
import ModalGeneric from '../Components/ModalGeneric/ModalGeneric'
import NotificationDiv from '../Components/NotificationDiv/NotificationDiv'
const WrappedDinamicElement=(props)=>{
    return(
        <>
            <DesktopWithInfo/>
            <SideMenu/>
            <ModalGeneric/>
            <NotificationDiv/>
            {props.children}
        </>
    )
}

export default WrappedDinamicElement