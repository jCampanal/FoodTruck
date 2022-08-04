import React, {lazy,Suspense} from 'react'
import { Routes, Route, Link } from "react-router-dom";


import Loading from '../Components/Loading/Loading'

import {MenuOtipons} from '../Lib/MenuOptions'

const Home=lazy(()=>import('../Main/Home/Home'))
const EatCategory=lazy(()=>import('../Main/EatCategoris/EatCategory'))
const ShoppingList=lazy(()=>import('../Main/ShoppingList/ShoppingList'))
const Log=lazy(()=>import('../Main/Log/Log'))
const Orders= lazy(()=>import('../Main/Orders/Orders'))

const AppRoutes =()=>{



    return(
   
        <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/shoppinglist" element={<ShoppingList/>} />
                    <Route path="/logguin" element={<Log/>} />
                    <Route path="/orders" element={<Orders/>} />

                    {MenuOtipons.map(element=>{
                        return(<Route key={element.key+'Route'} path={element.href} element={<EatCategory/>} />)
                    })}

                </Routes>
    </Suspense>
  
    )
}

export default AppRoutes