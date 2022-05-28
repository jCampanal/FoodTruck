import styled from 'styled-components'

export const Desktop=styled.div`
position:fixed;
display:${(props) => ((props.Open)? 'flex':"none")};
width:100%;
height:100%;
z-index:10000;
overflow-y:auto;
top:0;
left:0;
background-color:#414443B0;
`;



export const Content=styled.div`
display:flex;
position:fixed;
display:flex;
flex-direction: column;
overflow-y:${(props) => (props.Scroll? 'auto':'hidden')};
width:100%;
height:100%;
z-index:10001;
top:0;
left:${(props) => (props.Open? '-100%':props.Close?"100%":"0")};
transition: all 500ms;
`;


export const CloseButton=styled.div`
display:flex;
width:100%;
height: 40px;
justify-content:right;
align-items:center;
`;

export const InfoDiv=styled.div`
display:flex;
width:100%;
height:calc(100% - 40px);
flex-direction: column;
align-items: center;
justify-content:center;
margin-bottom:20px;
`;
