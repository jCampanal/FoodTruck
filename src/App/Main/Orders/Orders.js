import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';


import GlobalContentDiv from '../../Components/GlobalSectionContent/GlobalSectionContent'

import { setNavOpacity} from '../../Store/NavEffect/NavEffect';
import OrdersContnet from './OrdersContent/OrdersContent';

const Orders=(props)=>{

    const location=useLocation()
    const dispatch=useDispatch()

    const [shoopingAmount,setshoopingAmount]=useState()

    useEffect(()=>{dispatch(setNavOpacity([true, true, true]))},[location.pathname])

    return(
        <GlobalContentDiv>
            <OrdersContnet/>
        </GlobalContentDiv>)
}

export default Orders