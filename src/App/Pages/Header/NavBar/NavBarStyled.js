import styled from 'styled-components'

export const FirstDivNavS=styled.div`
width:100%;
position:relative;
top:0;
display: flex;
justify-content:center;

`;


export const SecondDivNavS=styled.div`
align-items:center;
justify-content:end;
display: flex;
height:60px;
width:100%;
background-color:#1976d2;
transition: all 300ms;
`;




export const NavDivS=styled.div`
display: flex;
align-items:center;
justify-content:end;
padding-right: 20px;
width:50%;
color:white;`;

export const ResponsivDiv=styled.div`
display:${(props)=>(props.Minor?'flex':'none')};
align-items:center;
@media screen and (min-width:600px){
    display:${(props)=>(props.Minor?'none':'flex')};    
}
`;