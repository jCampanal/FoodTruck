import Styled from 'styled-components'


export const ContentDivS=Styled.div`
height:70vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
`;

export const ButtonS=Styled.button`
background-color:${(props)=>(props.clicked?'#bb0000e3':'#fc0d0de3')};
display:flex;
align-items:center;
justify-content:center;
border: 2px solid;
border-color:#bb0000e3;
border-radius:20px;
color:white;
margin-bottom:20px;
width:200px;
height:100px;
cursor:pointer;
transition: all 300ms;`;


export const H3S=Styled.h3`
color:white;`;