import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

//REDUX
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducer/rootReducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);