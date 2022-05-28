import styled from 'styled-components'

export const ButtonS =styled.a`
display:${(props)=>(props.Hidden?'none':'flex')}; 
text-decoration:none;
cursor:pointer;
color:${(props)=>(props.Color?props.Color:'white')};
@media screen and (min-width:400px){
    margin-right:36px;
    display:flex;
}
`;