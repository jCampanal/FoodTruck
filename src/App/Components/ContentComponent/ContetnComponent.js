import React from 'react' 

import Styled from 'styled-components'

const Components=Styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color:#ffffff;
padding: 5px 0 20px 0;
`


const ContentComponent =(props)=>{

return(
    <Components>
        {props.children}
    </Components>
)
}

export default ContentComponent