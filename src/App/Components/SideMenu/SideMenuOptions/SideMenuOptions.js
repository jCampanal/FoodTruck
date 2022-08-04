import React from 'react'
import Styled from 'styled-components'
import SideHear from '../SideHear/SideHear'

import {IconOptions} from '../../../Lib/MenuOptions'
import ButtonOptions from '../ButtonOptions/ButtonOptions'

const Content=Styled.div`
position:absolute;
bottom:0;
display:flex;
flex-direction:column;
width:100%;
`;

const ButtonContent=Styled.div`
display:flex;
width:100%;
justify-content:left;
padding-left:20px;
align-items:center`;

const MenuName=Styled.h3`
margin:2px 10px;
`;

const SideMenuOptions=(props)=>{

    return(
            <Content >
            <SideHear second>{'Options'}</SideHear>
            {IconOptions.slice(0,-1).map(element=>{
                return(
                    <ButtonOptions 
                        key={element.key+'sideMenu'}
                        href={element.href}
                        config={element.config}>
                            <ButtonContent>
                                {element.icon}
                                <MenuName>{element.caption}</MenuName>
                            </ButtonContent>
                    </ButtonOptions>    )
            })}
            </Content>)
}

export default SideMenuOptions