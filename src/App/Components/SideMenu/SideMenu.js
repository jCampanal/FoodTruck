import React,{useState,useEffect} from 'react'
import { 
    ListItemButton,
    ListItem,
    ListItemIcon,
    Box,
    List,
    ListItemText,
    Divider,
    Typography} from '@mui/material'
import {
    ContentMenuDivS,
    CloseMenuDiv,
    NavDivs,
    Backdrop,
    RegisterDivs,
    LinkS,
    Name,
    RegisterBottom} from './SideMenuStyled'
import {NavListData} from '../../Routes/NavListData';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import MuiLoginButton from '../MuiLoginButton/MuiLoguinButton';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import MuiHistorialButton from '../MuiHistorialButton/MuiHistorialButton';
import { useDispatch,useSelector } from "react-redux";
import { setOpenDesktop} from "../../Store/SideMenu/SideMenu";
import { selectOpen} from "../../Store/SideMenu/SideMenu";

const SideMenu=(props)=>{
    const navegate = useNavigate()  
    const location=useLocation()
    const open=useSelector(selectOpen)   
    const dispatch=useDispatch()

    const HandleCloseButtonClick=()=>{
        dispatch(setOpenDesktop(false))
    }

    return(
        <>
        <Backdrop Show={open} onClick={HandleCloseButtonClick}/>
        <ContentMenuDivS Show={open}>
            <CloseMenuDiv>                
                <Name>Estilos</Name>
                <IconButton sx={{marginRight:1,color:'#1976d2'}}>
                    <ClearIcon onClick={HandleCloseButtonClick}/>
                </IconButton>    
            </CloseMenuDiv>

            <RegisterDivs>
                <RegisterBottom>
                <MuiLoginButton/>
                </RegisterBottom>
                <RegisterBottom>
                <MuiHistorialButton/>
                </RegisterBottom>
            </RegisterDivs>

            <Box sx={{ width: '100%',
                        color:'white',
                    }}>
            <Divider sx={{backgroundColor:'white'}}/>
            <List >            
                {NavListData.map((element,index)=>{
                    
                    return(
                            
                            <ListItem button
                                    sx={{justifyContent: "center",
                                        alignItems:'center',
                                        marginBottom:'10px',
                                        height:'20px'}}
                                    key={element.Title}
                                    selected={element.HREF === location.pathname}
                                    onClick ={()=>{navegate(element.HREF)}}
                                    >                                       
        
                                                {element.Title}                                            
                                        
                            </ListItem>
                           
                        )})
                    }
                </List>
            </Box>
        </ContentMenuDivS>
        </>
    )
}

export default SideMenu