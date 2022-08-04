import React,{useState} from 'react'  
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import { setNavOpacity } from '../../../Store/NavEffect/NavEffect';

import {
        Section,
        H2S,
        H6S,
        ButtonS,
        Content
} from './MenuItemsStyled'




const MenuItem=(props)=>{
    const [clicked, setClicked]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const HandlerMouseDown=()=>{
        if(!props.selected){
        setTimeout(()=>{
            dispatch(setNavOpacity([true,false,true]))
        },[300])
        setTimeout(()=>{
            navigate(props.href)
        },[800])
    }
}

    return(
        <Content>
        <Section>
        <H2S>{props.caption}</H2S>
        <H6S>{props.info}</H6S>
        <ButtonS 
                onMouseDown={()=>{setClicked(true)}}
                onMouseUp={()=>{setClicked(false)}}
                onTouchStart={()=>{setClicked(true)}}
                onTouchEnd={()=>{setClicked(false)}}
                onClick={()=>{HandlerMouseDown()}}
                >{'SEE'}</ButtonS>
        </Section>
        </Content>
    )
}


export default MenuItem