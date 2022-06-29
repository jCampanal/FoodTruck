import React from 'react' 
import {FirstContainDiv} from './GenderMenuStyled'
import GenderButtons from './GenderButtons/GenderButtons'

const GenderMenu=(props)=>{
    
    return(
        <FirstContainDiv>
            <GenderButtons {...props} />
        </FirstContainDiv>    
    )
}

export default GenderMenu