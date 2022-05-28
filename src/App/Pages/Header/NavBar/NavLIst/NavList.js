import React from 'react' 
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {NavListData} from '../../../../Routes/NavListData'
import {LinkS} from './NavListStyled'

const NavList=()=>{
    return(
            <ButtonGroup disableElevation variant="contained" aria-label="text button group">
                 {NavListData.map(element=>{
                     return(
                    <Button key={element.Title}>
                        <LinkS href={element.HREF}>
                            {element.Title}
                        </LinkS>
                    </Button>
                     )
                 })}
            </ButtonGroup>)
}

export  default NavList 