import styled from 'styled-components' 

export const VisulaPromotionDiv=styled.div`
width:100%;
display:float;
overflow:hidden;
max-width:1600px;
`;

export const ConteinVisulaPromotionDiv=styled.div`
width:100%;
display:float;
justify-content:center;
overflow:hidden;

`;


export const ColumnLeft=styled.div`
position:absolute;
left:0;
width:0;
z-index:14;
background:black;
@media screen and (min-width:1600px){
    width:calc(50% - 300px);
    height:300px;
}
`;

export const ColumnRight=styled.div`
position:absolute;
right:0;
width:0;
z-index:14;
background:black;
@media screen and (min-width:1600px){
    width:calc(50% - 300px);
    width:calc(50% - 300px);
    height:300px;
}
`;



export const VisualIMG= styled.img`
width:100%;
max-width:1600px;
position:absolute;
z-index:${(props)=>(props.change?'9':'11')};

`;

export const ModelIMG= styled.img`
width:100%;
max-width:1600px;
display:flex;
`;

export const NewIMG= styled.img`
width:100%;
position:absolute;
max-width:1600px;
z-index:10;
right:${(props)=>(props.change?'0':'-100%')};
transition: all 600ms;
@media screen and (min-width:1600px){
    right: ${(props) => (props.change? 'calc(50% - 300px)':'-100%')};
}
`;

