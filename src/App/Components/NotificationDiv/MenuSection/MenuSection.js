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
                        caption={element.caption}
                        info={'dsdfsp dsfs df dsf fs df sdf sdfg rth ty tyj ytj uj yujy uj uj yuj yj yt g h fdfdgdf dfg dfg  g dfg dhfhdfh '}/>
                )
            })}
        </SectionConteindS>
    )
}

export default MenuSection 