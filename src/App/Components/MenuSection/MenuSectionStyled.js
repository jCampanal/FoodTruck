import Styled from 'styled-components'


export const SectionConteindS=Styled.div`
display:grid;
grid-template-rows: auto;
grid-template-columns: 1fr;
width:80%;
max-width:1200px;
@media screen and (min-width:750px){
    grid-template-columns: 1fr 1fr;
 }
 @media screen and (min-width:1200px){
    grid-template-columns: 1fr 1fr 1fr;
 }
`;