import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import HomeBody from "./HomeBody/HomeBody";


import { setNavOpacity} from '../../Store/NavEffect/NavEffect';

const Home=(props)=>{
    const location=useLocation()
    const dispatch=useDispatch()

    useEffect(()=>{
        if(location.pathname==='/')
        dispatch(setNavOpacity([true, true, true]))
    },[location.pathname])

    return(
            <HomeBody/>
           )
}


export default Home