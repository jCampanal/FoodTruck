import styled from 'styled-components'  

export const H4S= styled.h4`
display:${(props)=>(props.Hidden?'none':'flex')};
color: black;
@media screen and (min-width:400px){
    margin-left:36px;
    display:flex;
}
`;