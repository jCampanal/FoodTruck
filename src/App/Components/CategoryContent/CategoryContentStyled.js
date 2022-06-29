import Styled from 'styled-components' 

export const FirstCategoryDiv=Styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
`;
export const ContentName= Styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:start;
width:90%;
max-width:1200px;
`;

export const Name= Styled.h2`
color:red;
margin: 15px 0px 0px 0px;
`;

export const ContentClother=Styled.div`
width:90%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto;
max-width:1200px;
@media screen and (min-width:800px){
    grid-template-columns: 1fr 1fr 1fr;
 }
@media screen and (min-width:1200px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
 }
`;