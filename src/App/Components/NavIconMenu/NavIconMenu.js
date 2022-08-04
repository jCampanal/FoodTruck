import React from 'react' 
import Styled from 'styled-components'
import { useLocation } from 'react-use'

import NavIconButton from './NavIconButton/NavIconButton'

import {IconOptions} from '../../Lib/MenuOptions'


const ResponsiveDiv=Styled.div`
display:${(props)=>(props.smallScreen?'initial':'none')};
@media screen and (min-width:370px){
    display:${(props)=>(props.smallScreen?'none':'initial')};
}
`

const NavIconMenu=(props)=>{
    const location=useLocation()

    return(<>
        <ResponsiveDiv>{
        IconOptions.slice((location.pathname==='/'?1:0),IconOptions.length).map(element=>{            
            
            return(
                <NavIconButton key={element.key} href={element.href} selected={element.href===location.pathname}>
                    {element.icon}
                </NavIconButton>
            )
        })
    }</ResponsiveDiv>
    
    <ResponsiveDiv smallScreen>{
        IconOptions.slice(2,IconOptions.length).map(element=>{
 

            return(
                <NavIconButton key={element.key} href={element.href} selected={element.href===location.pathname}>
                    {element.icon}
                </NavIconButton>
            )
        })
    }</ResponsiveDiv>
    </>
    )
    
    }
    


export default NavIconMenu