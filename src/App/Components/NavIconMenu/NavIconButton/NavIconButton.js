import React,{useState} from 'react' 
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import Styled from 'styled-components'

import { setOpenDesktop} from "../../../Store/SideMenu/SideMenu";
import { setNavOpacity} from '../../../Store/NavEffect/NavEffect'

const IconButton=Styled.button`
margin: 0 1vw;
border-radius:100px;
padding: 10px 13px;
border: 2px solid;
color:${(props)=>(props.clicked?'#d8810f':'#fff')};
border-color: ${(props)=>(props.clicked?'#fff':'#d8810f')};
background-color: ${(props)=>(props.clicked?'#fff':'#d8810f')};
transition:all 500ms;
cursor:pointer;
`

const NavIconButton=(props)=>{
    const [clicked, setClicked]=useState(false)
    const dispatch = useDispatch()
    const navigate= useNavigate()

    const HandlerMouseDown=()=>{
        if(props.href==='XXX'){
            dispatch(setOpenDesktop(true))
        }else{
            if(!props.selected){
                setClicked(true)
                setTimeout(()=>{
                    dispatch(setNavOpacity([true,false,true]))
                },[300])
                setTimeout(()=>{
                    navigate(props.href)
                },[800])
            }
        }
    }



    return(
    <IconButton
        onClick={()=>{HandlerMouseDown()}}
        onTouchStart={()=>{setClicked(true)}}
        onTouchEnd={()=>{setTimeout(()=>{setClicked(false)},200)}}
        onMouseOver={()=>{setClicked(true)}}
        onMouseLeave={()=>{setTimeout(()=>{setClicked(false)},200)}}
        clicked={clicked}>
        {props.children}
    </IconButton>)
}

export default NavIconButton