import React from 'react'
import './App.css';
import {ThemeProvider} from '@mui/material/styles' 
import {MuiTheme} from './StyleConfig/ThemeMaterialUI/ThemeMUI'
import AppRoutes from './Routes/Routes';
import WrappedDinamicElement from './DinamicElements/DinamcElements';
import Header from './Pages/Header/Header';
import MaxContainer from './Pages/MaxContainer/MaxContainer';
import EffectBody from './Pages/Body/EffectBody';
import Favicon from '../Assets/icono.png'

const App=()=> {

  const favicon=document.getElementById('favicon')
  favicon.href=Favicon

  return (
    <ThemeProvider theme={MuiTheme}>
      <MaxContainer>      
        <WrappedDinamicElement>
            <Header/> 
            <EffectBody>   
              <AppRoutes/>          
            </EffectBody> 
        </WrappedDinamicElement>

      </MaxContainer>   

    </ThemeProvider>
  );
}

export default App;
