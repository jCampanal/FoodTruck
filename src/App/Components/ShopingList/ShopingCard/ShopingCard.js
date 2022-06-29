import React from 'react' 
import {
    FirstDiv,
    SecondDiv,
    Picture,
    FirstTextContent,
    TextConstent,
    ClickDiv,
    H4S,
    PicturePriceContent
} from './ShopingCardStyled'
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux'
import { selectShopinList, CodeShopinList, eliminateShopingElement} from "../../../Store/ShopingList/ShopingList";

const ShopingCard=(props)=>{
    const dispatch=useDispatch()
    const List=useSelector(selectShopinList)
    const Code=useSelector(CodeShopinList)


    const handlerCloseElement=(Id)=>{
        console.log('Id')
        console.log(Id)
        dispatch(eliminateShopingElement({
            Code:[...Code],
            List:[...List],
            Id:Id
        }))
    }
    return(
        <FirstDiv>
                <TextConstent>
                    <H4S >{props.Nombre}</H4S>
                </TextConstent>
        <SecondDiv>
            <FirstTextContent>
                <TextConstent>
                    <H4S>Cantidad:</H4S>
                    <H4S Color={'green'} >{props.Cantidad}</H4S>
                </TextConstent>
                <TextConstent>
                    <H4S>Costo:</H4S>
                    <H4S Color={'green'} >{props.Precio}</H4S>                    
                </TextConstent>

            </FirstTextContent>
            <PicturePriceContent>
                <Picture src={props.Src}/>      
            </PicturePriceContent>
            
            <ClickDiv onClick={()=>handlerCloseElement(props.NoOrder)}>
                <IconButton>
                    <ClearIcon/>
                </IconButton>
            </ClickDiv>
            </SecondDiv>
            <H4S Color={'red'} >{props.NoOrder}</H4S>
        </FirstDiv>
    )
}

export default ShopingCard