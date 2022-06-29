import Styled from 'styled-components'

export const ContentDiv =Styled.div`
width:100%;
display:flex;
flex-direction:column;
justifi-content:center;
align-items:center;
cursor:pointer;
text-align:center;
margin:10px 0px;

`;

export const H3S=Styled.h3`
display:flex;
color:black;
@media screen and (min-width:800px){
    display: none;
 }
`;
export const H2S=Styled.h2`
display:none;
color:black;
@media screen and (min-width:800px){
    display: flex;
 }
`;

export const ImgS=Styled.img`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
border-radius:10px;
`;

export const ContentImgS=Styled.div`
display:flex;
position:relative;
width:100px;
height:100px;
border: 2px solid rgba(11, 48, 73, 0.623); 
scale: 1;
border-radius:10px;
box-shadow: 1px 1px 10px #9eb1b6, 1px 1px 10px #9eb1b6;
transition: all 1000ms;
:hover{
box-shadow: 2px 2px 10px black, 2px 2px 10px black;
scale: 1.05;
} 
:focus{
    box-shadow: 2px 2px 10px black, 2px 2px 10px black;
    scale: 1.05;
    } 
@media screen and (min-width:350px){
        width:150px;
        height:150px;
     }
@media screen and (min-width:600px){
    width:200px;
    height:200px;
 }
`;