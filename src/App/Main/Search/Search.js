import React from 'react' 
import Styled from 'styled-components'

const H1S=Styled.h1`
color:#7d8a8aaa;
text-align:center;
width:90%;`;

const FirstDiv=Styled.div`
padding-top:20px;
width:100%;
height:100vh;
display:flex;
align-items:top;
justify-content:center;
`


const Search =()=>{
    return(
        <FirstDiv>
            <H1S>
                Lo sentimos el servidor no se conecta
            </H1S>
        </FirstDiv>
    )
}


export default Search