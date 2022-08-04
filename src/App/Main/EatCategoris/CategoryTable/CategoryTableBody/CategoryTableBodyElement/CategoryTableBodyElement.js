import React,{useState} from 'react'
import Styled from 'styled-components'

import BuySection from './BuySection/BuySection';

const GlobalContent=Styled.div`
display:flex;
flex-direction:column;
width:100%;
min-height:${(props)=>(props.totalHeight?'210px':'60px')};
max-height:${(props)=>(props.totalHeight?'210px':'60px')};
overflow:hidden;
transition:all 500ms;
border-bottom:1px solid black;`; 

const FirstContentDiv=Styled.div`
display:grid;
grid-template-columns:40% 20% 40%;
grid-template-rows:auto;
width:100%;
max-height:50px;
height:60px;
cursor:pointer;
@media screen and (min-width:450px){
    grid-template-columns:40% 25% 35%;
}`;

const ImgS=Styled.img`
width:75px;
height:75px;`;

const Info=Styled.h4`
text-align:left;
margin: 2px 5px;
color:#d8810f;
`;

const SecondContentDiv=Styled.button`
display:grid;
border:none;
background-color:initial;
grid-template-columns:40% 60%;
grid-template-rows:auto;
width:100%;
height:150px;
padding:10px 0;
cursor:pointer;
transition: all 500ms;
`;

const SecondsContentDiv=Styled.div`
display:flex;
height:100%;
justify-content:${(props)=>(props.name?'left':'center')};
padding-left:${(props)=>(props.name?'5vw':'0')};
align-items:center;
`;

const Caption=Styled.h4`
color:#d8810f;
margin:0 0;
`;

const CategoryTableBodyElement=(props)=>{
    const [globalHeight,setGlobalHeight]=useState(false)

    const HandlerInfo=()=>{
        setGlobalHeight(!globalHeight)
    }

    return(
        <GlobalContent totalHeight={globalHeight}>
        <FirstContentDiv>
            <SecondsContentDiv name onClick={()=>HandlerInfo()}>
                <Caption>{props.caption}</Caption>
            </SecondsContentDiv>
            <SecondsContentDiv>
                <Caption>{props.price.toFixed(2)}</Caption>
            </SecondsContentDiv>
            <SecondsContentDiv>
                <BuySection price={props.price.toFixed(2)} name={props.caption} src={props.src}/>
            </SecondsContentDiv>
        </FirstContentDiv>
        <SecondContentDiv >
            <SecondsContentDiv>
                <ImgS src={props.src}/>
            </SecondsContentDiv>
            <SecondsContentDiv>
                <Info>{props.info}</Info>
            </SecondsContentDiv>
            
        </SecondContentDiv>
        </GlobalContent>
    )
}

export default CategoryTableBodyElement