import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import ShoopingListElements from './ShoopingListElements/ShoopingListElemenst';
import FooterShoppingList from './FooterShoppingList/FooterShoppingList'
import GlobalContentDiv from '../../Components/GlobalSectionContent/GlobalSectionContent'

import { setNavOpacity} from '../../Store/NavEffect/NavEffect';

const ShoppingList=(props)=>{

    const location=useLocation()
    const dispatch=useDispatch()

    const [shoopingAmount,setshoopingAmount]=useState()

    useEffect(()=>{dispatch(setNavOpacity([true, true, true]))},[location.pathname])

    return(
        <GlobalContentDiv>
            <ShoopingListElements/>
            <FooterShoppingList setAmount={setshoopingAmount} amount={shoopingAmount}/>
        </GlobalContentDiv>)
}

export default ShoppingList