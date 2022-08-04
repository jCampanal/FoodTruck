import React from 'react' 
import { useLocation } from 'react-router'
import Styled from 'styled-components'

import CategoryTableBodyElement from './CategoryTableBodyElement/CategoryTableBodyElement'

import {Eat} from '../../../../Lib/EatCategorisData'


const Content=Styled.div`
display:flex;
flex-direction:column;
width:100%;
height:calc(100% - 50px);
max-height:calc(100% - 50px);
overflow:auto;
`;



const CategoryTableBody=()=>{
    const location = useLocation()
    return(
        <Content>
            {
            Eat[location.pathname.slice(6,location.pathname.length)].map((element,idx)=>{
                console.log(element.caption)
                return(<CategoryTableBodyElement
                                                key={element.caption+'Tabebody'}
                                                price={element.price}
                                                caption={element.caption}
                                                src={element.logo}
                                                info={element.info}/>)
            })
            }
        </Content>
    )
}

export default CategoryTableBody