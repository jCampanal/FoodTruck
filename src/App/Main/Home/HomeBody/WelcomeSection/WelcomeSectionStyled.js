import Styled from 'styled-components'


export const TextDiv =Styled.div`
display:flex;
padding 10px 0 10px 10px;
width:80%;
flex-direction:column;
@media screen and (min-width:400px){
    align-items:center;
    padding 10px 0 10px 0;
}`;

export const ImgS=Styled.img`
width:50vw;
height:50vw;
max-width:300px;
max-height:300px;
`;

export const H3S=Styled.h3`
color:red;
font-size: 5vw;
@media screen and (min-width:500px){
    font-size: 3vw;
}`;

export const H6S=Styled.p`
color:black;
font-size: 2.5vw;
text-align:center;
@media screen and (min-width:700px){
    font-size: 1.5vw;
}`;