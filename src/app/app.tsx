'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Components/Navbar/navbar'
import Header from './Components/Header/header'
import PageBody from './Components/PageBody/PageBody'
import Footer from './Components/Footer/Footer'
import '../AllPic/flash shoe.webp'
import { useEffect, useState } from "react"
import Cart from './Components/Cart/Cart'
import { useSelector } from 'react-redux'

function App() {
  const {cartOpen}: any = useSelector((e: any) => e)
useEffect(() => {
    if(cartOpen == true)
    document.body.style.cssText = 'overflow-y: hidden; padding-right: 17px;';
  else
    document.body.style.cssText = 'overflow-y: scroll; padding: 0;';
},[cartOpen])
  return (
    <div>
      <Navbar />
      {cartOpen ? <Cart /> : false  }
      <Header />
      <PageBody />
      <Footer />
    </div>
  )
}
export default App;