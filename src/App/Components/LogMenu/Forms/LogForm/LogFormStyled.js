import Styled from 'styled-components'
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const ContentForm=Styled.div`
display:${(props)=>(props.Display?props.Display:'flex')};
align-items:${(props)=>(props.Item?props.Item:'center')};
flex-direction:${(props)=>(props.Row?'row':'column')};
width:${(props)=>(props.Width?props.Width:'100%')};
justify-content:${(props)=>(props.Justify?props.Justify:'right')};
margin:${(props)=>(props.Margin?props.Margin:'0')};`;

export const ContentInput=Styled.div`
width:48%;
display:flex;
@media screen and (min-width:400px){
  width:100%;
}`;

export const DivContent=Styled.div`
display:flex;
width:${(props)=>(props.Width?props.Width:'80%')};
flex-direction:row;
justify-content:${(props)=>(props.Center?'center':'right')};
`;




export const ChangeMenu=Styled.h5`
display:flex;
color:#1976d2;
margin: 7px 0px 2px 0px;
cursor:pointer;`;




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