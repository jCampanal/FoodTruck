import React from 'react' 
import {FirstCategoryDiv,ContentName,Name,ContentClother} from './CategoryContentStyled'

const CategoryContent=(props)=>{

    return(
        <FirstCategoryDiv>
            <ContentName>
                <Name>
                    {props.name}
                </Name>
            </ContentName>
            <ContentClother>
                    {props.children}
            </ContentClother>
        </FirstCategoryDiv>
        
    )
}
export default CategoryContent