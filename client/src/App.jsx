import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

import UserRoutes from "./routes/UserRoutes";
import AuthRoutes from "./routes/AuthRoutes";

import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoutes />}>
            {AuthRoutes.map((route, index) => (
              <Route 
                key={index}
                path={route.path}
                element={route.element}
               />
              ))
            }
          </Route>

          <Route element={<PrivateRoutes />}>
            {UserRoutes.map((route, index) => (
              <Route 
                key={index}
                path={route.path}
                element={route.element}
               />
              ))
            }
          </Route>
          
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
