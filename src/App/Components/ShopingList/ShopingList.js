import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { selectShopinList} from "../../Store/ShopingList/ShopingList";
import {
    ContentDiv,
    DivButton,
    AuthButtonSX,
    H2S,
    FirstCardConteind,
    BorderDiv
}from './ShopingListStyled'
import ShopingCard from './ShopingCard/ShopingCard'
import {setOpenNotification,setContentNotification,setStatusNotification} from '../../Store/NotificationDiv/NotificationDiv'



const ShopingList=(props)=>{
   const List=useSelector(selectShopinList)
    const dispatch=useDispatch()
   
    const HandlerPay=()=>{
        //Aqui viene el post de la operacion

        //Como no existe Backend siempre dara error
        dispatch(setContentNotification('Error de conexión'))
        dispatch(setStatusNotification('fall'))
        setTimeout(()=>{
            dispatch(setOpenNotification(true))
        },200)
    } 

    return(

        <ContentDiv>
            {List.length>0&&
            <>
            <BorderDiv/>
            <FirstCardConteind>
                {List.map(element=>{
                    return(
                        <ShopingCard
                        Nombre={element.Nombre}
                        Precio={'$'+element.Precio}
                        Cantidad={element.Cantidad}
                        NoOrder={element.Id}
                        Src={element.Src}/>
                    )
                })}
            </FirstCardConteind>
            <BorderDiv/>
            </>
            }
            
            {!(List.length>0)&&<H2S>No hay nada en la lista de compra aún</H2S>}
            {List.length>0&&<DivButton>
                <AuthButtonSX onClick={()=>{HandlerPay()}}>Pagar</AuthButtonSX>
            </DivButton>}
        </ContentDiv>
    )
}

export default ShopingList