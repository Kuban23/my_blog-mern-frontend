import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from 'react-redux';

import "./index.scss";
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <Provider store={store}>
               <App />
            </Provider>
         </BrowserRouter>
      </ThemeProvider>
   </>
);

reportWebVitals();
