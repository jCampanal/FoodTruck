import React from 'react' 
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {NavListData} from '../../../../Routes/NavListData'
import {LinkS} from './NavListStyled'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNavOpacity } from '../../../../Store/NavEffect/NavEffect';

const NavList=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()

  

    const HandlerLinkto=(path)=>{               
        dispatch(setNavOpacity(false))
        setTimeout(()=>{navigate(path)},700)
    }

    return(
            <ButtonGroup disableElevation variant="contained" aria-label="text button group">
                 {NavListData.map(element=>{
                     return(
                    <Button key={element.Title} onClick={()=>{HandlerLinkto(element.HREF)}}>
                      
                            {element.Title}
                        
                    </Button>
                     )
                 })}
            </ButtonGroup>)
}

export  default NavList 