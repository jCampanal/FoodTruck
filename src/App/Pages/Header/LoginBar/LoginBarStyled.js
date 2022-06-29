import styled from 'styled-components' 

export const FirstDivLoguin=styled.div`
width:100%;
position:relative;
top:0;
zIndex:30;
display: flex;
justify-content:center;
border-top: 2px solid #1976d2;
`;
export const SecondDivLoguin=styled.div`
align-items:center;
justify-content:center;
display: flex;
height:30px;
width:100%;
transition: all 300ms;

@media screen and (min-width:400px){
    justify-content:space-between;
}`;

