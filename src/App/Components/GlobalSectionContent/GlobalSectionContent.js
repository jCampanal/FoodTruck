import Styled from 'styled-components'

const Div=Styled.div`
display:flex;
height:calc(100vh - 138px);
width:100%;
flex-direction:column;
justify-content:center;
align-items:center`;

const GlobalContentDiv=(props)=>{

    return(
        <Div>{props.children}</Div>
    )
}

export default GlobalContentDiv