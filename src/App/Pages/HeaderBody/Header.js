import { useState,} from 'react'
import Styled from 'styled-components'



import FirstDiv from "./FirstDiv/FirstLogoContent"
import SecondDiv from "./SecondDiv/SecondDiv"
import NavIconMenu from '../../Components/NavIconMenu/NavIconMenu'

const HeaderContentDiv=Styled.div`
position:relative;
background-color:rgba(216, 129, 15);
box-shadow:2px 2px 5px gray;
width:100%;`;


const HeaderBody=(props)=>{
    const [logoEffect,setLogoEffect]=useState(true)


    return(
        <HeaderContentDiv>
            
            <FirstDiv setShow={setLogoEffect}/>
            <SecondDiv effect={logoEffect}>
                <NavIconMenu/>
            </SecondDiv>
            {props.children}
        </HeaderContentDiv>

    )
}

export default HeaderBody;