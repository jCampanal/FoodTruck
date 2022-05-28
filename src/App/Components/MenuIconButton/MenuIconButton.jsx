import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import AppsIcon from '@mui/icons-material/Apps';
import { ResponsiveDiv } from './MenuIconsStyled';
import Tooltip from '@mui/material/Tooltip';

const MenuIconsButton=(props)=>{
    return(
        <ResponsiveDiv {...props} onClick={props.click}>
            <Tooltip title={props.App?'Open':'Close'}>
                <IconButton sx={{color:props.Cross?'white':props.Color?props.Color:'black'}} size='large' >
                    {props.Cross&&<ClearIcon size="large"/>}
                    {props.App&&<AppsIcon size="large"/>}
                </IconButton> 
            </Tooltip> 
        </ResponsiveDiv> 
    )
}

export default MenuIconsButton