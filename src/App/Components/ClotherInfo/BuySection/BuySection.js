import React,{useState} from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import {InfoContentDiv} from '../ClotherInfoStyled'
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch,useSelector } from "react-redux";
import { eliminateShopingElement, putShopingElement} from "../../../Store/ShopingList/ShopingList";
import { selectShopinList,CodeShopinList} from "../../../Store/ShopingList/ShopingList";
import {setOpenNotification,setContentNotification,setStatusNotification} from '../../../Store/NotificationDiv/NotificationDiv'

const BuySection=({element})=>{
    const dispatch=useDispatch()
    const [value,setValue]=useState(0)
    const [cantidad,setCantidad]=useState(false)
    const List =useSelector(selectShopinList)
    const Code =useSelector(CodeShopinList)
    console.log('Se activo el buy section')
    const Input = styled(MuiInput)`
    width: 42px;
    `;

    const ColorButton = styled(IconButton)(({ theme }) => ({
        color: '#1976d2',       
        '&:hover': {
          backgroundColor: '#0a1929',
        },
      }));



    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const handleClickAddCar = () => {
        
        if(value!==0){
            const Fecha=(Date.parse(new Date())+'').slice(0, 6)
            const Random=Math.random()
            dispatch(putShopingElement({List:[...List],
                                        Code:[...Code],
                                        ShopingElement:{...element,Id:Fecha+element.ID+'ds'+Random.toFixed(5),Cantidad:value,Precio:(value*(element.Precio-element.Precio*element.rebaja*0.01)).toFixed(2) }
                                      }))
            dispatch(setContentNotification('Orden añadida al carro'));  
            dispatch(setStatusNotification('succ'));   
            dispatch(setOpenNotification(true));                       
        }else{
        dispatch(setContentNotification('Nada que agregar al carro'));  
        dispatch(setStatusNotification('x'));   
        dispatch(setOpenNotification(true)); 
        }
      };
    
     

    return(
        
                    <Box sx={{ width: 300 ,marginLeft:'40px' }}>
                    <Typography id="input-slider" gutterBottom>
                        Pedido
                    </Typography>
                    <Grid container spacing={2} alignItems="center">        
                        <Grid item sx={{display:'flex',alignItems:'center',flexDirection:'row'}}>
                        <Box sx={{width:'150px'}}>
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                            max={element.Existencias}
                        />
                        </Box>
                        {cantidad&&<h4 style={{color:'#1976d2',cursor:'pointer',marginLeft:'10px'}} onClick={()=>{setCantidad(!cantidad)}}>{value}</h4>}
                        {!cantidad&&<h4 style={{color:'#1976d2',cursor:'pointer',marginLeft:'10px'}} onClick={()=>{setCantidad(!cantidad)}}>{'$'+((value*(element.Precio-element.Precio*element.rebaja*0.01)).toFixed(2))}</h4>}
                        </Grid >
                        <Grid item onClick={()=>{handleClickAddCar()}}>
                            <ColorButton >
                                <AddShoppingCartIcon/>
                            </ColorButton>
                        </Grid>
                    </Grid>                
                </Box>
                
          
    )
}

export default BuySection