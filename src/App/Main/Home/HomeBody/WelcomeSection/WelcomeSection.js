import React from 'react' 

import ContentComponent from '../../../../Components/ContentComponent/ContetnComponent'
import PictureComponent from '../../../../Components/PictureComponent/PictureComponent'
import {
    TextDiv,
    ImgS,
    H3S,
    H6S
        } from './WelcomeSectionStyled'

import Icon from '../../../../../Assets/icono.png'
import {WelcomeSectionDataP} from '../HomeBodyPicture'

const WelcomeSection =(props)=>{

    return(<>
            <PictureComponent 
                src={WelcomeSectionDataP[0].src} 
                srcSet={`${WelcomeSectionDataP[0].src} 450w,${WelcomeSectionDataP[1].src} 800w,${WelcomeSectionDataP[2].src} 1100w, ${WelcomeSectionDataP[3].src} 1800w`}
                header={'Welcome'}
                body={'Where your favorite dishes become reality'}
                zindex={'-1'} />
            <ContentComponent>
                <ImgS src={Icon}/>
                <TextDiv>
                    <H3S>{'Vision'}</H3S>
                    <H6S>{'Become the best food delivery service in the contry'}</H6S>
                </TextDiv>
                <TextDiv>
                    <H3S>{'Mission'}</H3S>
                    <H6S>{'Provide customers with a quality food delivery service quickly and safely'}</H6S>
                </TextDiv>
            </ContentComponent>
            </>)
}


export default WelcomeSection