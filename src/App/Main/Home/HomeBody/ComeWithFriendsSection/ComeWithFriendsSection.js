import React from 'react' 

import ContentComponent from '../../../../Components/ContentComponent/ContetnComponent'
import PictureComponent from '../../../../Components/PictureComponent/PictureComponent'
import MenuSection from '../../../../Components/MenuSection/MenuSection'


import {EnjoyWithFriendsSectiondataP} from '../HomeBodyPicture'



import {
    H3S,
    H2S
        }from './ComeWithFriendsSectionStyled'

const ComeWithFriendsSection=()=>{

    return(<>
        <PictureComponent 
            src={EnjoyWithFriendsSectiondataP[0].src} 
            srcSet={`${EnjoyWithFriendsSectiondataP[0].src} 450w,${EnjoyWithFriendsSectiondataP[1].src} 800w,${EnjoyWithFriendsSectiondataP[1].src} 1100w, ${EnjoyWithFriendsSectiondataP[2].src} 1800w`}
            header={'Come with your friends'}
            zindex={'-1'} />
        <ContentComponent>
          <H3S>{'Enjoy our menu'}</H3S>
          <MenuSection/>
        </ContentComponent>
        </>)
}

export default ComeWithFriendsSection