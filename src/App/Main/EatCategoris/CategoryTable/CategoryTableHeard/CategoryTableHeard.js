import React from 'react'
import Styled from 'styled-components'
import { useLocation } from 'react-router'


const FirstContentDiv=Styled.div`
display:grid;
grid-template-columns:40% 20% 40%;
grid-template-rows:auto;
width:100%;
height:50px;
box-shadow:3px 0px 5px black;
@media screen and (min-width:450px){
    grid-template-columns:40% 25% 35%;
}
`;

const SecondsContentDiv=Styled.div`
display:flex;
justify-content:${(props)=>(props.name?'left':'center')};
padding-left:${(props)=>(props.name?'5vw':'0')};
align-items:center;
border-left:${(props)=>(props.name?'none':'1px solid black')} ;
border-bottom:1px solid black;
`;

const Caption=Styled.h4`
color:#267eb8;
margin:0 0;
@media screen and (min-width:650px){
    font-size:2vw;
 }
`;

const ExpCaption=Styled(Caption)`
display:${(props)=>(props.min?'flex':'none')};
@media screen and (min-width:700px){
    display:${(props)=>(props.min?'none':'flex')};
}`;

const CategoryTableHeader=(props)=>{
    const location=useLocation()
    return(
        <FirstContentDiv>
            <SecondsContentDiv name>
               <Caption>{'Name'}</Caption> 
            </SecondsContentDiv>

            <SecondsContentDiv >
                <ExpCaption>{"Price $"}</ExpCaption> 
                <ExpCaption min>{"$"}</ExpCaption> 
            </SecondsContentDiv>

            <SecondsContentDiv >
                <Caption>{'Buy'}</Caption> 
            </SecondsContentDiv>
        </FirstContentDiv>
       
    )
}

export default CategoryTableHeader