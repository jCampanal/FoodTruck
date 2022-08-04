import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { 
    ListItem,
    Box,
    List,
    Divider,
} from '@mui/material'
import {
    ContentMenuDivS,
    CloseMenuDiv,
    Backdrop,
    ContentHeardMenu,
    H4S,
    ImgS,
    BackgroundImgS,
    RegisterBottom} from './SideMenuStyled'
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

import {MenuOtipons} from '../../Lib/MenuOptions'

import { setNavOpacity } from '../../Store/NavEffect/NavEffect';
import { useDispatch,useSelector } from "react-redux";
import { setOpenDesktop} from "../../Store/SideMenu/SideMenu";
import { selectOpen} from "../../Store/SideMenu/SideMenu";

import AuthForSideMenu from './AuthForSideMenu/AuthForSideMenu';
import SideMenuEat from './SideMenuEat/SideMenuEat'
import SideMenuOptions from './SideMenuOptions/SideMenuOptions';

import Icon from '../../../Assets/icono.png'
import BckgImg from '../../../Assets/Restaurant/fotoMenuDesplegable300x150.png'

const SideMenu=(props)=>{
    const navegate = useNavigate()  
    const location=useLocation()
    const open=useSelector(selectOpen)   
    const dispatch=useDispatch()

    const HandleCloseButtonClick=()=>{
        dispatch(setOpenDesktop(false))
    }

    const HandlerNavList=(path)=>{
        dispatch(setOpenDesktop(false))
        dispatch(setNavOpacity(false))
        setTimeout(()=>{
            navegate(path)
        },600)
    }
    
    return(
        <>
        <Backdrop Show={open} onClick={HandleCloseButtonClick}/>
        <ContentMenuDivS Show={open} className='sideMenu'>
            <CloseMenuDiv>  
                <BackgroundImgS src={BckgImg}/>
                <ContentHeardMenu>
                <ImgS src={Icon}/>
                <IconButton sx={{marginRight:1,color:'#1976d2'}}  onClick={HandleCloseButtonClick}>
                    <ClearIcon/>
                </IconButton> 
                
                </ContentHeardMenu>   

                <ContentHeardMenu second>
                <AuthForSideMenu/>
                </ContentHeardMenu>
            </CloseMenuDiv>

            <SideMenuEat/>
            <SideMenuOptions/>
        </ContentMenuDivS>
        </>
    )
}

export default SideMenu