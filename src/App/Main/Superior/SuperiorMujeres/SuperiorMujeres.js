import React from 'react' 
import CategoryContent from '../../../Components/CategoryContent/CategoryContent'
import ClotherToken from '../../../Components/ClotherToken/ClotherToken'
import {Categorias} from './SuperiorMujeresData'

const SuperiorMujeres=(props)=>{
    return(Object.keys(Categorias).map(categoryName=>{
        return(
            <CategoryContent key={categoryName} name={categoryName}>
                {Categorias[categoryName].map((element,index)=>{
                    return(
                        <ClotherToken 
                            key={element.ID+index}
                            TokenData={element}
                        />
                    )
                })}
            </CategoryContent>
        )
    }))
}

export default SuperiorMujeres