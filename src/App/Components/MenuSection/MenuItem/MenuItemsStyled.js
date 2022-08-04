import Styled from 'styled-components'

export const Content=Styled.div`
width:100%;
display:flex;
justify-content:center;`;


export const Section=Styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:30px;
justify-content:center;
border-radius:20px;
width:100%;
max-width:300px;
background-color:#d8810fe3;
box-shadow: 2px 3px 10px black, -2px -3px 10px black; `;


export const H2S=Styled.h2`
color:#fff;
width:80%;
text-align:center;`;

export const H6S=Styled.h6`
color:#fff;
width:80%;
text-align:center;`;

export const ButtonS=Styled.button`
background-color:${(props)=>(props.clicked?'#bb0000e3':'#fc0d0de3')};
border: 2px solid;
border-color:#bb0000e3;
border-radius:10px;
color:white;
margin-bottom:20px;
width:100px;
height:50px;
cursor:pointer;
transition: all 300ms;`;