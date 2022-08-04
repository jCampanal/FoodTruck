import React from 'react' 
import Styled from 'styled-components'

export const H3S=Styled.h3`
color:#fff;
margin: 2vw 0 2vw 0;
font-size: 3.5vw;
width:80%;
text-align:center;
@media screen and (min-width:700px){
    font-size: 2vw;
}`;

const SectionH3=(props)=>{

    return(
        <H3S>{props.children}</H3S>
    )
}

export default SectionH3
