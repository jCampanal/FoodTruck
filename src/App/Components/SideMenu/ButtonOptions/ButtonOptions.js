import React from 'react' 
import Styled from 'styled-components' 

import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { setNavOpacity } from '../../../Store/NavEffect/NavEffect';
import { setOpenDesktop } from '../../../Store/SideMenu/SideMenu';

const Button=Styled.button`
dispplay:flex;
alig-items:center;
width:100%;
margin: 2px 0;
padding: 5px 0;
border:none;
cursor:pointer;
background-color:${(props)=>(props.select?'#fff':'initial')};
color:${(props)=>(props.select?'#d8810f':'#fff')};
transition:all 300ms;
:hover{
    color:gray;
}`;


const ButtonOptions=(props)=>{
    const location =useLocation()
    const navigate= useNavigate()
    const dispatch= useDispatch()

    const HandlerClick=()=>{
        dispatch(setOpenDesktop(false))
        setTimeout(()=>{
            dispatch(setNavOpacity([props.config.HeaderAndFooder,false,props.config.HeaderAndFooder]))
        },[300])
        setTimeout(()=>{
            navigate(props.href)
        },[800])
        
    }

    return(<Button onClick={()=>{HandlerClick()}} select={location.pathname===props.href}>{props.children}</Button>)
}
export default ButtonOptions