import React from 'react' 
import Styled from 'styled-components'

const H1S=Styled.h1`
color:${(props)=>(props.color?props.color:'red')};
margin: 2vw 0 2vw 0;
font-size: 8vw;
width:${(props)=>(props.width?props.width:'auto')};
text-align:center;
@media screen and (min-width:700px){
    font-size: 5vw;
}`;


const SectionH1=(props)=>{

    return(
        <H1S color={props.color} >{props.children}</H1S>
    )
}

export default SectionH1