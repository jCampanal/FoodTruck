import React,{useEffect} from 'react'
import './App.css';
import {ThemeProvider} from '@mui/material/styles' 
import {MuiTheme} from './StyleConfig/ThemeMaterialUI/ThemeMUI'
import AppRoutes from './Routes/Routes';
import WrappedDinamicElement from './DinamicElements/DinamcElements';
import MaxContainer from './Pages/MaxContainer/MaxContainer';
import Favicon from '../Assets/icono.png'

const App=()=> {

  const favicon=document.getElementById('favicon')
  favicon.href=Favicon

  useEffect(()=>{
    document.title='Food truck'
  },[])
 

  return (
    <ThemeProvider theme={MuiTheme}>
      <MaxContainer>      
        <WrappedDinamicElement>           
           
              <AppRoutes/>          
         
        </WrappedDinamicElement>

      </MaxContainer>   

    </ThemeProvider>
  );
}

export default App;
