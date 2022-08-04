import React from 'react' 
import Loader from '../Loader/Loader'
import Styled from 'styled-components'

const ContentDiv=Styled.div`
display:flex;
width:100%;
justify-content:center;
margin: 30px 0 0 0;
`;


const Loading=(props)=>{
    return(
        <ContentDiv>
            <Loader/>
        </ContentDiv>
    )
}

export default Loading