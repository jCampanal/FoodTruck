import React from 'react'
import {FirstDivNavS,
        SecondDivNavS,
        NavDivS,
        ResponsivDiv
    }from './NavBarStyled'
import Navlink from './NavLIst/NavList'
import NavIcon from '../../../Components/NavIcon/NavIcon'
const NavBar=()=>{
    return(
        <FirstDivNavS>
            <SecondDivNavS>
                <NavDivS>
                    <ResponsivDiv>
                        <Navlink/>
                    </ResponsivDiv>
                    <ResponsivDiv Minor>
                        <NavIcon MarginR={1} Color={'white'}/>
                    </ResponsivDiv>
                </NavDivS>
            </SecondDivNavS>
        </FirstDivNavS>
    )
}

export default NavBar