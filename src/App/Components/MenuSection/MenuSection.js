import React from 'react'

import {
    SectionConteindS
    } from './MenuSectionStyled'

import {MenuOtipons} from '../../Lib/MenuOptions'

import MenuItem from './MenuItem/MenuItem'


const MenuSection =(props)=>{

    return(
        <SectionConteindS>
            {MenuOtipons.map(element=>{
                return(
                    <MenuItem
                        key={element.key}
                        href={element.href}
                        caption={element.caption}
                        info={element.info}/>
                )
            })}
        </SectionConteindS>
    )
}

export default MenuSection 