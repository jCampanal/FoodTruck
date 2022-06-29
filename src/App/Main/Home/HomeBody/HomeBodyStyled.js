import Styled from 'styled-components'

export const ContendBodyDiv=Styled.div`
width:100%;
display:flex;
align-items:center;
flex-direction:column;
`;

export const H1S = Styled.h1`
text-align:center;
margin: 20px 0 5px 0;
width:90%;
color: rgba(216, 15, 15, 0.774);
@media screen and (min-width:400px){
    width:80%;
}
@media screen and (min-width:600px){
    width:70%;
}
@media screen and (min-width:1000px){
    width:60%;
}`;

export const H2S=Styled.h4`
margin: 10px 0 10px 0;
text-align:center;
justify-text: inter-word;
width:90%;
@media screen and (min-width:400px){
    width:80%;
}
@media screen and (min-width:600px){
    width:70%;
}
@media screen and (min-width:1000px){
    width:60%;
}
`;