import Styled from 'styled-components' 

export const FirstDiv=Styled.div`
width:100%;
display:flex;
flex-direction:column;
padding: 5px 5px;
align-items:center;
`;

export const GeneralContent=Styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
margin: 10px 0;
`;

export const Picture=Styled.img`
width:100px;
height:100px;
cursor: pointer;
transition: all 500ms;
:hover{
box-shadow: 2px 2px 10px black, 2px 2px 10px black;
scale: 1.05;
} `


export const InfoContentDiv=Styled.div`
width:100%;
display:grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto;
`;

export const InfoDiv=Styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:${(props)=>(props.Marca?'center':'auto')};
`;

export const TextDiv=Styled.div`
width:100%;
display:flex;
flex-direction:row;
aling-items:center;
margin: 0 0 0 40px;`
;


export const MarcaIMG=Styled.img`
width:100px;
height:50px;
margin: 30px 0 0 0;`;

export const MarcaName=Styled.h2`
text-align:center`

export const H4S=Styled.h4`
color:${(props)=>(props.Color?props.Color:'black')};
margin:${(props)=>(props.Margin?'5px 0 5px 3px':'5px 0')}`;

export const H3S=Styled.h3`
width:80%;
margin: 5px 0;
color:${(props)=>(props.Color?props.Color:'black')};
text-align:center;`;

export const InfoDivAux=Styled.div`
text-align:center;
width:100%;
align-items:center;
`;

export const IMGS= Styled.img`
width:90%;
border-radius:10px;
min-width:200px;
@media screen and (min-width:600px){
    width:50%;
}
`;