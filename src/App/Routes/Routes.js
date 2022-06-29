import React, {lazy,Suspense} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Loading from '../Components/Loader/Loader'
import Home from '../Main/Home/Home';
import Search from '../Main/Search/Search'


const LCalzados=lazy(()=>import('../Main/Calzados/Calzados'))
const LCalzadosMujer=lazy(()=>import('../Main/Calzados/CalzadosMujer/CalzadosMujer'))
const LCalzadosMixtos=lazy(()=>import('../Main/Calzados/CalzadosMixtos/CalzadosMixtos'))

const LInferior=lazy(()=>import('../Main/Inferior/Inferior'))
const LInferiorMujeres=lazy(()=>import('../Main/Inferior/InferiorMujeres/InferiorMujeres'))
const LInferiorHombres=lazy(()=>import('../Main/Inferior/InferiorHombres/InferiorHombres'))

const LSuperior=lazy(()=>import('../Main/Superior/Superior'))
const LSuperiorMujeres=lazy(()=>import('../Main/Superior/SuperiorMujeres/SuperiorMujeres'))
const LSuperiorHombres=lazy(()=>import('../Main/Superior/SuperiorHombres/SuperiroHombres'))



const AppRoutes =()=>{



    return(
        <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path="/" element={<Home/>} />

                    <Route exact path="/calzados" element={<LCalzados/>} />
                        <Route exact path="/calzados/Mujeres" element={<LCalzadosMujer/>} />  
                        <Route exact path="/calzados/Unisex" element={<LCalzadosMixtos/>} /> 

                    <Route path="/inferior" element={<LInferior/>} />
                        <Route exact path="/inferior/Mujeres" element={<LInferiorMujeres/>} /> 
                        <Route exact path="/inferior/Hombres" element={<LInferiorHombres/>} /> 

                    <Route path="/superior" element={<LSuperior/>} />
                        <Route exact path="/Superior/Mujeres" element={<LSuperiorMujeres/>} /> 
                        <Route exact path="/Superior/Hombres" element={<LSuperiorHombres/>} />

                    <Route path="/search" element={<Search/>} />       
                </Routes>
    </Suspense>
    )
}

export default AppRoutes