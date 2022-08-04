import Styled from 'styled-components'

export const ImgS=Styled.img`
display:flex;
width:70px;
height:70px;`;

export const DeleteDiv=Styled.button`
position:absolute;
background-color:initial;
border:none;
cursor:pointer;
top:10px;
left: 10px;
color:red;
`;

export const H3S=Styled.h3`
margin:5px 5px;
color:#267eb8;`;

export const H4S=Styled.h4`
margin:6px 10px;
color:${(props)=>(props.color?props.color:'#d8810f')};`;