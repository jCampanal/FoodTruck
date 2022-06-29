import styled from 'styled-components'

export const FirstContainDiv=styled.div`
display:flex;
min-height:300px;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
@media screen and (min-width:600px){
    flex-direction:row;
    justify-content:space-evenly;
}
`;