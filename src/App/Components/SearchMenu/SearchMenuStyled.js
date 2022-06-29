import Styled from 'styled-components'
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const ContentForm=Styled.div`
opacity:${(props)=>(props.Opacity?props.Opacity:'1')};
display:${(props)=>(props.Display?props.Display:'flex')};
align-items:${(props)=>(props.Item?props.Item:'center')};
flex-direction:${(props)=>(props.Row?'row':'column')};
width:${(props)=>(props.Width?props.Width:'100%')};
height:${(props)=>(props.Height?props.Height:'auto')};
justify-content:${(props)=>(props.Justify?props.Justify:'right')};
margin:${(props)=>(props.Margin?props.Margin:'0')};

transition:opacity 300ms, height 500ms ;
`;

export const ContentCategoryAndGenderS=Styled.div`
display:flex;
align-items:top;
flex-direction:column;
width:80%;
margin:10px 0px;
transition:all 500ms;
@media screen and (min-width:400px){
    flex-direction:row;
    justify-content:space-between;
}`;


export const ContentInputPriceS=Styled.div`
width:48%;
display:flex;
margin:0px;
`;

export const ContentInputCategoryAndGenderS=Styled.div`
width:100%;
display:flex;
margin: ${(props)=>(props.Margin?props.Margin:'0')};
@media screen and (min-width:400px){
    width:48%;
    margin:0px;
    
}`;


export const RangoTestS={
color: 'rgba(0, 0, 0, 0.6)',
fontFamily:' "Roboto","Helvetica","Arial",sans-serif',
fontWeight: '400',
fontSize: '1rem',
lineHeight: '1.4375em',
letterSpacing: '0.00938em'}

export const DivContent=Styled.div`
display:flex;
width:${(props)=>(props.Width?props.Width:'80%')};
flex-direction:row;
justify-content:${(props)=>(props.Center?'center':'right')};
`;

