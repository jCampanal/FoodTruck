import styled from 'styled-components'

export const FirstDivSearch=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
height:60px;
background-color:#1976d2;
@media screen and (min-width:400px){
    justify-content:space-between;
    padding-right:36px;
}
`;
export const IconsContained=styled.div`
color:white;
align-items: center;
display: flex;
@media screen and (min-width:400px){
    padding-left:36px;   
}
`;
export const ResponsiveIconsContained=styled.div`
display:inline-flex;
@media screen and (min-width:600px){
    display:none;
}`;

export const IconsSx={color:'white'}