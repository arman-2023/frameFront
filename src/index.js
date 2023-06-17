import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, connect } from "react-redux";
import store from "./models/store.js";
import './index.css';
import App from './App';
import Login from "./components/Login"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />

  },
  {
    path: "/admin",
    element: <Login/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
  <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
  </Provider>
);
