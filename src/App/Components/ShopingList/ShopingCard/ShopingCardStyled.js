import Styled from 'styled-components' 

export const FirstDiv=Styled.div`
width:90%;
border: 2px solid #1976d2;
border-radius:8px;
padding:10px 0;
display:flex;
flex-direction:column;
align-items:center;
margin-top:5px;
position:relative;`

;

export const SecondDiv=Styled.div`
width:100%;
padding:0 0 10px 0;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`;

export const Picture=Styled.img`
width:75px;
height:75px;
`;

export const FirstTextContent=Styled.div`
display:flex;
flex-direction:column;
margin-right:10px;
`;

export const TextConstent=Styled.div`
display:flex;
flex-direction:row;`;

export const ClickDiv=Styled.div`
position:absolute;
Top: 5px;
right: 10px;`;

export const H4S=Styled.h4`
margin: 5px 0px 5px 10px;
color:${(props)=>(props.Color?props.Color:'black')};
width: ${(props)=>(props.Width?props.Width:'auto')}`;

export const PicturePriceContent=Styled.div`
display:flex;
flex-direction:column;
margin-right:10px;
justify-content:center;
`