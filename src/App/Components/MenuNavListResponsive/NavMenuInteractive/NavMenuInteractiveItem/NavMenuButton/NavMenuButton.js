import React , {useState}from 'react' 
import Styled from 'styled-components' 

import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { setNavOpacity } from '../../../../../Store/NavEffect/NavEffect';

const Button= Styled.button`
padding:10px 15px;
border:none;
color:${(props)=>(props.selected?'#d8810f':'white')};
display:grid;
grid-template-rows: [first] 80% [second] 20%;
grid-template-columns: auto;
align-items:center;
justify-content:center;
cursor:pointer;
transition: all 300ms;
background-color:initial;
`;


const H4S=Styled.h4`
text-align:center;
margin: 5px 5px;
@media screen and (min-width:650px){
    font-size:2vw;
 }
 @media screen and (min-width:1000px){
    font-size:15px;
 }`;

const Margin=Styled.div`
width:${(props)=>(props.clicked?'100%':'0%')};
border-color:color:${(props)=>(props.selected?'#d8810f':'white')};
border-bottom: 2px solid;
transition: all 300ms;`




const NavMenuButton=(props)=>{
    const [clicked,setClicked]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const HandlerMouseDown=()=>{
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

    const HandlerMouseUp=()=>{
        setClicked(false)
    }
    return(
        <Button 
                onMouseLeave={()=>{setClicked(false)}}
                onMouseOver={()=>{setClicked(true)}}
                onTouchEnd={()=>{setClicked(false)}}
                onTouchStart={()=>{setClicked(true)}}
                onClick={()=>{HandlerMouseDown()}}
                clicked={clicked}
                selected={props.selected}>
            <H4S>{props.children}</H4S>
            <Margin clicked={clicked} selected={props.selected}/>
        </Button>
    )
}


export default NavMenuButton