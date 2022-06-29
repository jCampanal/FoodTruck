import React,{useEffect} from 'react'
import Styled from 'styled-components'
import { useSelector,useDispatch } from 'react-redux';
import {setNavOpacity} from '../../Store/NavEffect/NavEffect'
import {selectNavOpacity} from '../../Store/NavEffect/NavEffect'

const BodyS=Styled.div`
background-color:#eff1f1;
opacity:${(props)=>(props.Opacity?'1':'0')};
transition: all 1000ms;`;

const EffectBody=(props)=>{
    const NavOpacity=useSelector(selectNavOpacity)
    const dispatch=useDispatch()
    console.log(NavOpacity)

    useEffect(()=>{
        if(!NavOpacity){
        setTimeout(()=>{ dispatch(setNavOpacity(true))},800)
        }
    },[NavOpacity])
    return(
        <BodyS Opacity={NavOpacity} >
        {props.children}
        </BodyS>
    )
}


export default EffectBody