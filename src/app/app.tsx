import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Components/Navbar/navbar'
import Header from './Components/Header/header'
import PageBody from './Components/PageBody/PageBody'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <PageBody />
      <Footer />
    </div>
  )
}
export default App;