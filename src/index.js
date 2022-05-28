import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n'
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Provider from 'react-redux/es/components/Provider';
import Store from './App/Store/index'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode >
      <BrowserRouter> 
        <Provider store={Store}> 
            <I18nextProvider i18n={i18next}>
              <App />
            </I18nextProvider>
        </Provider>     
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
