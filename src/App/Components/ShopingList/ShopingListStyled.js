import Styled from 'styled-components'
import {styled} from '@mui/styles'
import { Button } from '@mui/material';

export const ContentDiv=Styled.div`
display:flex;
width: 100%;
flex-direction:column;
align-items:center;
`;

export const DivButton=Styled.div`
width: 100%;
display:flex;
flex-direction:row;
justify-content:right;
padding-right:7%;`;


export const FirstCardConteind=Styled.div`
width: 100%;
display:flex;
flex-direction:row;
max-height:50vh;
flex-direction:column;
align-items:center;
overflow-y:auto;
overflow-x:hidden;`;

export const BorderDiv=Styled.span`
width:93%;
border-bottom:2px solid #1976d2;
border-radius:20px;
margin-top:5px;
margin-right:11px;`;

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

  export const H2S=Styled.h2`
  color:#7d8a8aaa;
  text-align:center;
  width:90%; `;