import Styled from 'styled-components'


export const FirstDiv=Styled.div`
width:100%;
height:30vh;
padding: 20px 0;
display:flex;
align-items:center;
justify-content:center;
background-color:#d8810f;
`;


export const SecondDiv=Styled.div`
width:40%;
min-width:150px;
padding: 5px 0;
display:flex;
flex-direction:column;
align-items:${(props)=>(props.align?props.align:'auto')};
border-right:${(props)=>(props.borderRight?props.borderRight:'auto')};
justify-content:center;`;


export const ImgS=Styled.img`
width:50vw;
height:50vw;
max-width:150px;
max-height:150px;
`;

export const ButtonS=Styled.button`
background-color:initial;
border:none;
text-align:center;`

export const H3S=Styled.h3`
color:white;`;