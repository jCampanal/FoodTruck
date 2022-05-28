import styled from 'styled-components'

export const FirstDivNavS=styled.div`
width:100%;
position:sticky;
top:0;
zIndex:30;
display: flex;
justify-content:center;

`;


export const SecondDivNavS=styled.div`
align-items:center;
justify-content:end;
display: flex;
height:2px;
width:100%;
background-color:#1976d2;
transition: all 300ms;
@media screen and (min-width:400px){
    height:30px;
}
@media screen and (min-width:600px){
    height:60px;
}`;




export const NavDivS=styled.div`
display: none;
align-items:center;
justify-content:end;
padding-right: 20px;
width:50%;
color:white;
@media screen and (min-width:400px){
    display: flex;
}`;

export const ResponsivDiv=styled.div`
display:${(props)=>(props.Minor?'flex':'none')};
@media screen and (min-width:600px){
    display:${(props)=>(props.Minor?'none':'flex')};    
}
`;