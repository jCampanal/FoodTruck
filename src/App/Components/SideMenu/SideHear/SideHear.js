import React from 'react' 
import Styled from 'styled-components' 

const Content=Styled.div`
display:flex;
width:100%;
justify-content:center;
border-top:${(props)=>(props.second?'1px solid white':'none')};
border-bottom:1px solid white;`

const Name= Styled.h3`
color:white;
margin: 5px 0;`;



const SideHear =(props)=>{

    return(
        <Content {...props}>
            <Name>{props.children}</Name>
        </Content>
    )
}


export default SideHear