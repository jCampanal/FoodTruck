import Styled from 'styled-components'

export const ContendDiv=Styled.div`
width:60vw;
height:60vw;
border: 2px solid rgba(11, 48, 73, 0.623); 
border-radius:10px;
scale:1;
position:relative;
margin: 10px 0 0 0;
cursor:pointer;
:hover{
    scale:1.05;
}
@media screen and (min-width:450px){
    width:40vw;
    height:40vw;
}
@media screen and (min-width:700px){
    width:200px;
    height:200px;
}`;

export const IMGS=Styled.img`
position:absolute;
width:100%;
height:100%;
border-radius:10px;
top:0;
left:0;
z-index:10;
`;

export const DesktopS=Styled.img`
position:absolute;
border-radius:10px;
width:100%;
height:${(props)=>(props.Desktop?'100%':'0%')};
border-radius:10px;
top:0;
left:0;
opacity:0.4;
background-color: rgba(20, 91, 139, 0.769);
z-index:12;
transition: all 400ms;
`;

export const CaptionDiv=Styled.div`
position:absolute;
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
top:0;
left:0;
z-index:13;`;

export const Caption=Styled.h1`
transform:rotate(45deg);
color:rgba(216, 15, 15, 0.774);`