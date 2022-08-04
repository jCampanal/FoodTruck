
import React,{useState} from 'react' 
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import ContentComponent from '../../../../Components/ContentComponent/ContetnComponent'
import PictureComponent from '../../../../Components/PictureComponent/PictureComponent'
import {ContentDivS,ButtonS,H3S} from './DeliverSectionStyled'
import {SaneFoodSectionDataP} from '../HomeBodyPicture'
import {setNavOpacity} from '../../../../Store/NavEffect/NavEffect'


const DeliverSection =(props)=>{
    const [clicked, setClicked]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const HandlerMouseDown=()=>{
        if(!props.selected){
        setTimeout(()=>{
            dispatch(setNavOpacity([true,false,true]))
        },[300])
        setTimeout(()=>{
            navigate('/orders')
        },[800])
    }
}
    return(<>
            <PictureComponent 
                src={SaneFoodSectionDataP[0].src} 
                srcSet={`${SaneFoodSectionDataP[0].src} 450w,${SaneFoodSectionDataP[1].src} 800w,${SaneFoodSectionDataP[1].src} 1100w, ${SaneFoodSectionDataP[2].src} 1800w`}
                header={'Delivers'}
                body={'Enjoy your food in house'}
                zindex={'-1'} />
            <ContentComponent>
                <ContentDivS>
                    <ButtonS
                            onMouseDown={()=>{setClicked(true)}}
                            onMouseUp={()=>{setClicked(false)}}
                            onTouchStart={()=>{setClicked(true)}}
                            onTouchEnd={()=>{setClicked(false)}}
                            onClick={()=>{HandlerMouseDown()}}>
                        <H3S>{'Watch orders'}</H3S>                        
                    </ButtonS>
                </ContentDivS>
            </ContentComponent>
            </>)
}


export default DeliverSection



 


