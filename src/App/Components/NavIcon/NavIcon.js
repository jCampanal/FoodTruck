import React from 'react'
import { IconButton } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import { useDispatch,useSelector } from "react-redux";
import { setOpenDesktop} from "../../Store/SideMenu/SideMenu";

const NavIcon=(props)=>{   
    const dispatch=useDispatch()

    const HandleClickOpenMenu=()=>{
        dispatch(setOpenDesktop(true))
    }
    return(
        <IconButton sx={{color:props.Color, marginRight:props.MarginR}}>
            <AppsIcon onClick={HandleClickOpenMenu}/>
        </IconButton>
    )
}

export default NavIcon