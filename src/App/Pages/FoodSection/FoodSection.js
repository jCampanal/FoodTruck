import React from 'react'
import {FirstDiv,SecondDiv,ImgS,ButtonS,H3S} from './FoodSectionStyled'

import Icon from '../../../Assets/icono.png'

const FoodSection=(props)=>{
    return(
        <FirstDiv>
            <SecondDiv align={'center'} borderRight={'1px solid #fff'}>
                <ImgS src={Icon}/>
            </SecondDiv>
            <SecondDiv>
                <ButtonS >
                    <H3S>{'Who we are?'}</H3S>
                </ButtonS>
            </SecondDiv>
        </FirstDiv>
    )
}

export default FoodSection