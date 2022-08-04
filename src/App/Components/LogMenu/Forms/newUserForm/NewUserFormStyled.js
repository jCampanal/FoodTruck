import Styled from 'styled-components'
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const ContentForm=Styled.div`
display:flex;
align-items:center;
flex-direction:column`;

export const DivContent=Styled.div`
display:flex;
width:${(props)=>(props.Width?props.Width:'80%')};
flex-direction:row;
justify-content:${(props)=>(props.Center?'center':'right')};
`;

export const ChangeMenu=Styled.h5`
display:flex;
color:#1976d2;
margin: 7px 5px 2px 5px;
cursor:pointer;`;

export const DivInput=Styled.div`
display:flex;
width:${(props)=>(props.width?props.width:'80%')};
flex-direction:${(props)=>(props.width?'column':'row')};
justify-content:center;
align-items:${(props)=>(props.width?'center':'initial')};
@media screen and (min-width:500px){
  width:80%;
  flex-direction:row;
  align-items:initial;
}
`;

export const ImgContaint=Styled.div`
position:relative;`;

export const Image=Styled.img`
display:flex;
width:100px;
height:100px;
border-radius:100px;`;

export const HiddenInput=Styled.input`
display:none;`;

export const PictureDiv=Styled.div`
display:flex;
flex-direction:row;
width:80%;
justify-content:space-evenly;
align-items:center;
`;

export const DeleteButton=Styled.button`
background-color:#cec7c744;
border:none;
position:absolute;
top:-10px;
right:-15px;
border-radius:100px;
cursor:pointer;
`

export const AuthButtonSX = styled(Button)({
                              boxShadow: 'none',
                              textTransform: 'none',
                              fontSize: 16,
                              margin:'10px 0px',
                              padding: '6px 12px',
                              border: '1px solid #1976d2',
                              lineHeight: 1.5,
                              color:'white',
                              backgroundColor: '#1976d2',
                              borderColor: '#1976d2',
                              fontFamily: [
                                '-apple-system',
                                'BlinkMacSystemFont',
                                '"Segoe UI"',
                                'Roboto',
                                '"Helvetica Neue"',
                                'Arial',
                                'sans-serif',
                                '"Apple Color Emoji"',
                                '"Segoe UI Emoji"',
                                '"Segoe UI Symbol"',
                              ].join(','),
                              '&:hover': {
                                backgroundColor: '#0069d9',
                                borderColor: '#0062cc',
                                boxShadow: 'none',
                              },
                              '&:active': {
                                boxShadow: 'none',
                                backgroundColor: '#0062cc',
                                borderColor: '#005cbf',
                              },
                              '&:focus': {
                                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                              },
                            });