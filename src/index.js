import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from './Routes/MainRouter';
import { ContextProvider } from './context/ContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <React.StrictMode>
            <MainRouter></MainRouter>
        </React.StrictMode>
    </ContextProvider>
);

