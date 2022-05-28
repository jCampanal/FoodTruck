import React from 'react' 

import PublicityContained from './PublicityContaind/PublicityConteind'
import NavBar from './NavBar/NavBar'
import LogoBar from './LogoBar/LogoBar'
import LoginBar from './LoginBar/LoginBar'
import SearchBarAndBuyCar from './SearchBarAndBuyCar/SearchBarAndBuyCar'

const Header =()=>{
    return(
        <>
        <LogoBar/>
        <LoginBar/>
        <NavBar/>
        <PublicityContained/>
        <SearchBarAndBuyCar/>
        </>
    )
}

export default Header