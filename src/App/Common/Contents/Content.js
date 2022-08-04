import Styled from 'styled-components'

export const BasicContent=Styled.div`
display:flex;
flex-direction:${(props)=>(props.First?'row':'column')};
align-items:center;
justify-content:${(props)=>(props.left?'left':'center')};
width:${(props)=>(props.First?'100%':'50%')};`;




export const ShoopingElementContent=Styled.div`
position:relative;
display:flex;
flex-direction:column;
width:95%;
margin:5px 0;
max-width:500px;
border-radius:10px;
border: 2px solid #a198989d;
box-shadow: 2px 2px 10px #cec7c79d, -2px -2px 10px #cec7c79d, 2px -2px 10px #cec7c79d, -2px 2px 10px #cec7c79d;
`;
