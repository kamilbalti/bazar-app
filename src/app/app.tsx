'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Components/Navbar/navbar'
import Header from './Components/Header/header'
import PageBody from './Components/PageBody/PageBody'
import Footer from './Components/Footer/Footer'
import '../AllPic/flash shoe.webp'
// import { CartInfo } from './data/MainData/MainData'
import Cart from './Components/Cart/Cart'
import { useAppSelector } from '@/Redux-Toolkit/Hook'
// import { CartInfo } from "../../data/CartData"

function App() {
  const cartOpen: any = useAppSelector((e) => e.cartOpen)
  // alert(CartInfo.cartOpen)
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