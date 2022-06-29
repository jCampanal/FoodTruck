import React,{useState} from 'react' 
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setNavOpacity } from '../../Store/NavEffect/NavEffect'

import {
    ContendDiv,
    IMGS,
    DesktopS,
    CaptionDiv,
    Caption
} from './CategoryHomeStyled'

const CategoryHome=(props)=>{
        const navigate=useNavigate()
        const dispatch=useDispatch()
        const [Destp,setDestp]=useState(false)

        const HandlerClickOn=(href)=>{
            setDestp(true);
            dispatch(setNavOpacity(true))
            setTimeout(() => {
               navigate(href) 
            }, 700);
        }

        return(
            <ContendDiv onClick={()=>{HandlerClickOn(props.href)}}>
                <IMGS src={props.src}/>
                <DesktopS Desktop={Destp}/>
                <CaptionDiv>
                    <Caption>{props.caption}</Caption>
                </CaptionDiv>
            </ContendDiv>
        )
}

export default CategoryHome