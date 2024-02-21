import React from 'react'
import {RouterProvider} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js'
import router from './components/Routers/RoutersProviders'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer/>
    </>
  );
}

export default App
