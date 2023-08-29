'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Components/Navbar/navbar'
import Header from './Components/Header/header'
import PageBody from './Components/PageBody/PageBody'
import Footer from './Components/Footer/Footer'
import '../AllPic/flash shoe.webp'
import { useEffect, useState } from "react"
// import { CartInfo } from './data/MainData/MainData'
import Cart from './Components/Cart/Cart'
import { useAppDispatch, useAppSelector } from '@/Redux-Toolkit/Hook'
import { setCartData, setItemsQuantity } from '@/Redux-Toolkit/BazarSlice'
// import { CartInfo } from "../../data/CartData"

function App() {
  const {cartOpen, cartData, ItemsQuantity}: any = useAppSelector((e) => e)
  const dispatch = useAppDispatch()
  const [ check, setCheck ] = useState()
useEffect(() => {
  let tempReducer;
  let temp;
  if(check == true){
    tempReducer = { cartData: cartData, ItemsQuantity: ItemsQuantity}
    localStorage.setItem("/", JSON.stringify(tempReducer))
  }
},[cartData, ItemsQuantity])
useEffect(() => {
    let temp = JSON.parse(localStorage?.getItem("/"))
    if(temp){
    dispatch(setCartData(temp?.cartData))
    dispatch(setItemsQuantity(temp?.ItemsQuantity))
  }
    setCheck(true)
},[])
useEffect(() => {
    if(cartOpen == true)
    document.body.style.cssText = 'overflow-y: hidden; padding-right: 17px;';
  else
    document.body.style.cssText = 'overflow-y: scroll; padding: 0;';
},[cartOpen])
  return (
    <div>
      <Navbar />
      {/* <Cart /> */}
      {cartOpen ? <Cart /> : false  }
      {/* <img src={`../../../`}/> */}
      <Header />
      <PageBody />
      <Footer />
    </div>
  )
}
export default App;