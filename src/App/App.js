import React from 'react'
import './App.css';
import {ThemeProvider} from '@mui/material/styles' 
import {MuiTheme} from './StyleConfig/ThemeMaterialUI/ThemeMUI'
import AppRoutes from './Routes/Routes';
import WrappedDinamicElement from './DinamicElements/DinamcElements';
import Header from './Pages/Header/Header';
const App=()=> {
  return (
    <ThemeProvider theme={MuiTheme}>
      <WrappedDinamicElement>
            <Header>    
          <AppRoutes/>          
            </Header>
      </WrappedDinamicElement>
    </ThemeProvider>
  );
}

export default App;
