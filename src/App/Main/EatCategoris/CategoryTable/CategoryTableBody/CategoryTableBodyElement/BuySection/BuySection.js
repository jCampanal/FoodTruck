
import React,{useState} from 'react' 
import Styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { selectShopinList, CodeShopinList,putShopingElement} from '../../../../../../Store/ShopingList/ShopingList'

import  ShoppingCartIcon  from "@mui/icons-material/ShoppingCart"
import  ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import  ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import  IconButton  from './IconButton/IconButton'

import {setOpenNotification,setContentNotification,setStatusNotification} from '../../../../../../Store/NotificationDiv/NotificationDiv'
const Content=Styled.div`
display:flex;
width:100%;
max-width:200px;
align-items:center;
justify-content:space-evenly;`;

const ContentSecondDiv=Styled.div`
display:flex;
width:50%;
max-width:50px;
justify-content:space-between;
align-items:center;`;

const H4S=Styled.h4`
color: #d8810f;
margin:0;`;



const IconContent=Styled.div`
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const BuySection=(props)=>{


    const dispatch=useDispatch()

    const List=useSelector(selectShopinList)
    const Code=useSelector(CodeShopinList)

    const [amount,setAmount]=useState(0)
    
    
    const HandlerClickCaptureAmountButton=(valor)=>{
        const newValor=(parseInt(amount,10)+parseInt(valor,10)).toFixed(0)
        if(newValor>=0&&newValor<100)
        {
            setAmount(newValor)
        }
    }

    const HandlerAddCar=()=>{
        
        if(amount>0){
        dispatch(setContentNotification(`${amount} ${props.name} added to the car`))
        dispatch(setStatusNotification('succ'))
        dispatch(setOpenNotification(true))   
        
        const aux=amount
        const Fecha=(Date.parse(new Date())+'').slice(0, 6)
        const Random=Math.random()
        dispatch(putShopingElement({List:[...List],
                                    Code:[...Code],
                                    ShopingElement:{Nombre:props.name,Src:props.src,Id:Fecha+'ds'+Random.toFixed(5),Cantidad:aux,Precio:props.price }
                                  }))
        setAmount(0)
        }
    }

    return(
        <Content>
            <ContentSecondDiv>     
                <H4S>{amount}</H4S>
                <IconContent>
                    <IconButton
                        clickCapture={()=>HandlerClickCaptureAmountButton(1)}
                        color={'#d8810f'}
                        y={-5}>
                        <ArrowDropUpIcon/>
                    </IconButton>
                    <IconButton
                        clickCapture={()=>HandlerClickCaptureAmountButton(-1)}
                        color={'#d8810f'}
                        y={5}>
                        <ArrowDropDownIcon/>
                    </IconButton>
                </IconContent>
            </ContentSecondDiv>
                <IconContent>
                    <IconButton
                        clickCapture={()=>HandlerAddCar()}
                        color={'#267eb8'}
                        y={0}>
                        <ShoppingCartIcon/>
                    </IconButton>
                </IconContent>
           
      </Content>
    )
}

export default BuySection