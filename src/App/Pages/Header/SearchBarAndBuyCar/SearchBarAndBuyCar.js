import React from 'react' 
import{
    FirstDivSearch,
    IconsContained,
    IconsSx,
    ResponsiveIconsContained
} from './SearchBarAndBuyCarStyled'
import SearchBar from './SearchBar/SearchBar'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { setOpenModal, setContentModal,setTitleModal} from "../../../Store/MotionGenerix/ModalGeneric";
import SearchMenu from '../../../Components/SearchMenu/SearchMenu';
import { useDispatch,useSelector } from "react-redux";
import ShopingList from '../../../Components/ShopingList/ShopingList';
import { setNavOpacity } from '../../../Store/NavEffect/NavEffect';
import { useNavigate } from 'react-router';

const SearchBarAndBuyCar=()=>{
    const dispatch=useDispatch()

    const navigate=useNavigate()

    const HandlerClickHome=()=>{
        dispatch(setNavOpacity(false))
        setTimeout(()=>{navigate('/')},700)
    }


    const HandlerSearch=()=>{
        dispatch(setTitleModal('Buscar'))
        dispatch(setContentModal(<SearchMenu></SearchMenu>))
        setTimeout(()=>{dispatch(setOpenModal(true))},200)
        
    }


    const HandlerClickCar=()=>{
        dispatch(setTitleModal('Compra'))
        dispatch(setContentModal(<ShopingList></ShopingList>))
        setTimeout(()=>{dispatch(setOpenModal(true))},200)
    }
    return(
        
        <FirstDivSearch>
            <IconsContained>
            <ResponsiveIconsContained>
                <IconButton onClick={()=>{HandlerClickHome()}}>
                    <AccountBalanceIcon sx={IconsSx}/>                    
                </IconButton>
                <IconButton onClick={()=>{HandlerClickCar()}}>
                    <ShoppingCartIcon sx={IconsSx}/>                    
                </IconButton>
                
                 {/*   <IconButton onClick={()=>{HandlerSearch()}}>
                            <SearchIcon sx={IconsSx}/>                    
                        </IconButton>*/}
            </ResponsiveIconsContained>
            </IconsContained>

            <SearchBar/>
        </FirstDivSearch>
    )
}

export default SearchBarAndBuyCar