import React,{useState,useEffect} from 'react'
import Styled from 'styled-components'
import { useSelector,useDispatch } from 'react-redux';


import DeleteIcon from '@mui/icons-material/Delete'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import CaptionFooter from '../../../Common/Captions/CaptionFooter/CaptionFooter';
import FooterShoopingListButtom from '../../../Common/Button/FooterShoopingListButton';

import  {selectShopinList, CodeShopinList, clearElements } from '../../../Store/ShopingList/ShopingList'
import  {selectStatus} from '../../../Store/auth/authorizationSlice'
import { setOpenNotification,setContentNotification,setStatusNotification} from '../../../Store/NotificationDiv/NotificationDiv';
import {putHistorialElement, selectHistorialList, CodeHistorialList} from '../../../Store/HistorialData/HistorialData'


const MaxDiv=Styled.div`
display:flex;
justify-content:center;
width:100%;
background-color:#267eb8;
box-shadow: -2px 0px 10px black;`;

const FirstDiv=Styled.div`
display:flex;
flex-direction:column;
width:100%;
max-width:700px;
color:white;
align-items:center;`;

const SecondDiv=Styled.div`
display:flex;
flex-direction:${(props)=>(props.columns?'column':'row')};
align-items:center;
padding: 5px 0px;
justify-content:space-evenly;
width:100%;`;



const FooterShoppingList =(props)=>{
    const List=useSelector(selectShopinList)
    const HistorialList=useSelector(selectHistorialList)

    const Code=useSelector(CodeShopinList)
    const CodeHistorial=useSelector(CodeHistorialList)

    const Auth=useSelector(selectStatus)
    const dispatch=useDispatch()


    const HandlerLimpiarHistorial=()=>{
        dispatch(clearElements(Code))
        dispatch(setContentNotification('order cleared'))
        dispatch(setStatusNotification('succ'))
        dispatch(setOpenNotification(true))
    }

    const HandlerAddOrder=()=>{
        let date= new Date

        if(List.length===0){
            dispatch(setContentNotification('nothing to add'))
            dispatch(setStatusNotification('fall'))
            dispatch(setOpenNotification(true))            
        }else if(!Auth){
            dispatch(setContentNotification('please, sign in'))
            dispatch(setStatusNotification('fall'))
            dispatch(setOpenNotification(true))              
        }else if((date.getHours()+1<9&&date.getHours()+1>22)){
            dispatch(setContentNotification("we're close from 9pm to 8am"))
            dispatch(setStatusNotification('fall'))
            dispatch(setOpenNotification(true)) 
        }else{
            let price=0
            let NewId='sde'
            
            

            let food=List.map(element=>{
                price=price+(parseFloat(element.Precio)*parseFloat(element.Cantidad))
                NewId=NewId+element.Id
                return({
                    Id:element.Id,
                    Name:element.Nombre,
                    Price:element.Precio,
                    Amount:element.Cantidad,
                })
            })
            date.setHours(date.getHours()+1)
           
           dispatch(putHistorialElement(
            {
                Code:CodeHistorial,
                List:HistorialList,
                NewOrder:{
                    Id:NewId,
                    Price:price,
                    Address:localStorage.getItem('address'),
                    Deliver:date.toString(),
                    Status:'XXX',
                    Elements:food
                }
                }
            ))

            dispatch(setContentNotification('order added'))
            dispatch(setStatusNotification('succ'))
            dispatch(setOpenNotification(true))
            dispatch(clearElements(Code))
        }

    }

    useEffect(()=>{
        let aux=0
        if(List.length>0){
            List.map(element=>{
                aux=aux+(parseFloat(element.Precio)*parseFloat(element.Cantidad))
            })

        }
            props.setAmount(aux.toFixed(2))
        
    },[List])



    return(
        <MaxDiv>
            <FirstDiv>
                <SecondDiv columns>
                    <CaptionFooter margin={'10px'} >{'amount:'}</CaptionFooter>
                    <CaptionFooter color={'green'}>{'$'+props.amount}</CaptionFooter>
                </SecondDiv>
                <SecondDiv>
                    <FooterShoopingListButtom color={['white','#267eb8']} caption={'Clear order'} click={()=>{HandlerLimpiarHistorial()}}>
                        <DeleteIcon/>
                    </FooterShoopingListButtom>    
                    <FooterShoopingListButtom color={['white','#267eb8']} caption={'Make order'} click={()=>{HandlerAddOrder()}}>
                        <LocalShippingIcon/>
                    </FooterShoopingListButtom>   
                </SecondDiv>  
            
            </FirstDiv>
        </MaxDiv>
    )
}

export default FooterShoppingList