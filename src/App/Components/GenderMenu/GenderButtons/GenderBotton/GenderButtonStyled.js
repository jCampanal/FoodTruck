import Styled from 'styled-components'


export const FirstContent=Styled.div`
width: 90vw;
max-width: 300px;
max-height: 450px;
display:flex;
align-items:center;
justify-content:center;
height: calc(90vh * 1.5);
opacity:${(props)=>(props.Opacity?'1':'0')};
margin: 10px 0px;
position:relative;
box-shadow: 1px 1px 10px #9eb1b6, 1px 1px 10px #9eb1b6;
border: 2px solid;
border-color: ${(props)=>(props.Color?props.Color:'black')};
border-radius: 10px;
cursor:pointer;
transition: opacity 1000ms, color 1500ms, border-color 1500ms, box-shadow 1000ms, scale 1000ms  ;
scale: 1;
:hover{
    box-shadow: 2px 2px 10px black, 2px 2px 10px black;
    scale: 1.02;
@media screen and (min-width:400px){
    max-width: auto;    
    max-height: auto;
}`;

export const H1S=Styled.h1`
color:${(props)=>(props.Color?props.Color:'black')};
transition: opacity 1000ms, color 1500ms, border-color 1500ms;
position:absolute;
z-Index:100;
bottom:5px;
left:10px;
`;

export const Img=Styled.img`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
border-radius:10px;
`;

export const ContentImg=Styled.img`
width:100%;
height:${(props)=>(props.Clicked?'100%':'0%')};
background-color:${(props)=>(props.Color?props.Color:'black')};
position:absolute;
top:0;
left:0;
opacity:0.4;
border-radius:10px;
z-Index:99;
transition: height 200ms, background-color 1500ms;
`;