import Styled from 'styled-components'

export const Picture=Styled.img`
width:100%;
`
export const ConteindS=Styled.div`
width:100%;
position:sticky;
justify-content: center;
align-items:center;
display:${(props)=>(props.s600?'flex':'none')};
top:50px;
z-index:-2;
@media screen and (min-width:800px){
    display:${(props)=>(props.s1000?'flex':'none')};
}
@media screen and (min-width:1100px){
    display:${(props)=>(props.s1300?'flex':'none')};
}`
;


export const Conteind=Styled.div`
width:100%;
position:sticky;
justify-content: center;
align-items:center;
display:flex;
top:50px;
z-index:-2;
`
;

export const AbsoluteDivConteind=Styled.div`
position:absolute;
top:0;
left:0;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
width:100%;
height:100%;

`
export const H1S=Styled.h1`
color:red;
margin: 2vw 0 2vw 0;
font-size: 8vw;
width:80%;
text-align:center;
@media screen and (min-width:700px){
    font-size: 5vw;
}`;

export const H3S=Styled.h3`
color:#fff;
margin: 2vw 0 2vw 0;
font-size: 3.5vw;
width:80%;
text-align:center;
@media screen and (min-width:700px){
    font-size: 2vw;
}`;

