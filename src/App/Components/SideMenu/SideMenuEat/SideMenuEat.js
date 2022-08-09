import React from 'react'
import Styled from 'styled-components'
import SideHear from '../SideHear/SideHear'

import {MenuOtipons} from '../../../Lib/MenuOptions'
import ButtonOptions from '../ButtonOptions/ButtonOptions'

const Content=Styled.div`
display:flex;
flex-direction:column;
width:100%;
max-height:calc(100vh - 362px);
overflow-y:auto;
`;

const ButtonContent=Styled.div`
display:flex;
width:100%;
flex-flow: row wrap;
justify-content:right;
align-items:center`;

const MenuName=Styled.h3`
margin:2px 10px;
`;

const SideMenuEat=(props)=>{

    return(
            <>
            <SideHear>{'Menu'}</SideHear>
            <Content height={window.screen.height}>
            {MenuOtipons.map(element=>{
                return(
                    <ButtonOptions 
                        key={element.key+'sideMenu'}
                        href={element.href}
                        config={element.config}>                        
                            <ButtonContent>
                                <MenuName>{element.caption}</MenuName>
                            </ButtonContent>
                    </ButtonOptions>    )
            })}
            </Content>
            </>)
}

export default SideMenuEat