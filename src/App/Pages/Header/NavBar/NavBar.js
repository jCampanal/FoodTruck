import React from 'react'
import {FirstDivNavS,
        SecondDivNavS,
        NavDivS,
        ResponsivDiv
    }from './NavBarStyled'
import IconButton from '@mui/material/IconButton';
import { setOpenModal, setContentModal,setTitleModal} from "../../../Store/MotionGenerix/ModalGeneric";
import ShopingList from '../../../Components/ShopingList/ShopingList';
import { useDispatch,useSelector } from "react-redux";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navlink from './NavLIst/NavList'
import { setNavOpacity } from '../../../Store/NavEffect/NavEffect';
import { useNavigate } from 'react-router';

const NavBar=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const HandlerClickHome=()=>{
        dispatch(setNavOpacity(false))
        setTimeout(()=>{navigate('/')},700)
    }

    const HandlerClickCar=()=>{
        dispatch(setTitleModal('Compra'))
        dispatch(setContentModal(<ShopingList></ShopingList>))
        setTimeout(()=>{dispatch(setOpenModal(true))},200)
    }

    return(
        <FirstDivNavS>
            <SecondDivNavS>
                <NavDivS>
                    <ResponsivDiv>
                        <Navlink/>
                    </ResponsivDiv>
                    <ResponsivDiv Minor>
                    <IconButton  onClick={()=>{HandlerClickHome()}}>
                        <AccountBalanceIcon sx={{color:'white'}} />                    
                    </IconButton>
                    <IconButton>
                        <ShoppingCartIcon sx={{color:'white'}} 
                                          onClick={()=>{HandlerClickCar()}}/>                    
                    </IconButton>
                    </ResponsivDiv>
                </NavDivS>
            </SecondDivNavS>
        </FirstDivNavS>
    )
}

export default NavBar