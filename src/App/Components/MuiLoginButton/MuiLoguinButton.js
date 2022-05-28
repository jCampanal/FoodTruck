import React from 'react'
import { Button } from "@mui/material";
import { ButtonSX } from './MuiLoginButtonStyled';
const MuiLoginButton=(props)=>{
    return(
        <Button sx={ButtonSX}>
            Loguin
        </Button>
    )

}

export default MuiLoginButton