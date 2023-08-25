import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Components/Navbar/navbar'
import Header from './Components/Header/header'
import PageBody from './Components/PageBody/PageBody'
import { Provider } from 'react-redux'
import App from './app'
// import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'redux'
// import Reducer from './redux'
// import {configureStore} from "@reduxjs/toolkit"
// import Reducer  from './redux'
import { BrowserRouter } from "react-router-dom";
import { store } from '../Redux-Toolkit/Store.js'

export default function Home() {

  // const store = configureStore({reducer: Reducer})
  // createStore()
  return (
    <>
    {/* <h1>Hello</h1> */}
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
      {/* </Provider> */}
    </>
  )
}
