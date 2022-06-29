import Styled from 'styled-components' 

export const ContentDivS=Styled.div`
position:fixed;
border-radius:5px;
min-width:200px;
align-items:center;
display:flex;
justify-content:space-evenly;
background-color:${(props)=>(props.Color?props.Color:'gray')};
right:2px;
top:3vh;
z-index:3000;
`;

export const H3S=Styled.h3`
color:white;
text-align:center;
margin:10px 10px;
`;

export const DivVariant={
    Hidden:{
        x:[0,-10,400]
    },
    Show:{
        x:[400,-10,0]
    }
}