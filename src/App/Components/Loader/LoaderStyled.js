import styled from 'styled-components'

export const LoaderS=styled.div`
width:${(props)=>(props.Width?props.Width:'30px')};
border-radius:100px;
height:${(props)=>(props.Width?props.Width:'30px')};
background-color:${(props)=>(props.Color?props.Color:'#1976d2')};
`;