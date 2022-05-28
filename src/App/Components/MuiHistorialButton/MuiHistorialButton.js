import React from 'react'
import { Button } from "@mui/material";
import { ButtonSX } from './MuiHistorialButtonStyled';
const MuiHistorialButton=(props)=>{
    return(
        <Button sx={ButtonSX}>
            Historial
        </Button>
    )

}

export default MuiHistorialButton