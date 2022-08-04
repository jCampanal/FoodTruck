import { useState,useEffect } from 'react'
import Styled from 'styled-components'
import { motion } from 'framer-motion'

import NavMenuButton from './NavMenuButton/NavMenuButton'
import { useLocation } from 'react-router';


const DivContaind=Styled.div`
position:absolute;
display:flex;
flex-direction:row;
width:100vw;
height:100%;
justify-content:center;
`;

const variantsNav = {
    active: {
        x:[-20000,0]
    },
    inactive: {
        x:[0,20000],      
    },
  }



const NavMenuIneractiveItem=(props)=>{
    const location=useLocation()

    

    return(
        <DivContaind
        as={motion.div}
        variants={variantsNav}
        animate={props.state}
        initial={false} 
        transition={{ duration: 0.5 }}>
            {
            props.element.map((element)=>{
                   return(
                   
                   <NavMenuButton key={element.key} href={element.href} selected={location.pathname===element.href}>
                       {element.caption}
                    </NavMenuButton>
                    
                    )
            })}
        </DivContaind>
    )
}


export default NavMenuIneractiveItem