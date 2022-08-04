import React,{useState} from 'react' 
import Styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import { setNavOpacity } from '../../../Store/NavEffect/NavEffect';
import { setOpenDesktop } from '../../../Store/SideMenu/SideMenu';
import { selectUserName } from '../../../Store/auth/authorizationSlice';

import Avatar from '../../../../Assets/avatar-man-icon-profile-placeholder-260nw-1229859850.webp'




const Name=Styled.h2`
margin-right:20px;
color:#d8810f;
cursor:pointer;
margin-top:50px`;

const ImgS=Styled.img`
margin-right:5px;
border-radius:300px;
width:65px;
height:65px;
border: 2px solid #d8810f;
cursor:pointer;`;

const MaxConteind=Styled.button`
position:relative;
display:flex;
background-color:initial;
border:none;
justify-content:right;
align-items:center;
width:100%;
height:100%;
`;




const AuthForSideMenu=(props)=>{
    const [open,setOpen]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const User=useSelector(selectUserName)

    const HandlerClick=()=>{
        dispatch(setOpenDesktop(false))
        setTimeout(()=>{
            dispatch(setNavOpacity([false,false,false]))
        },[300])
        setTimeout(()=>{
            navigate('/logguin')
        },[800])
        
    }
    return(
        <MaxConteind onClick={()=>{HandlerClick()}}>
           <Name>{User?User:''}</Name>
           <ImgS src={window.localStorage.getItem('src')&&User?window.localStorage.getItem('src'):Avatar}/>
        </MaxConteind>
    )
}


export default AuthForSideMenu