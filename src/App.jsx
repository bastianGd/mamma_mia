/* eslint-disable no-unused-vars */
import './App.css'
import RegForm from './views/RegForm'
import Navbar from './components/Navbars/Navbar'
import Footer from './components/Footer/FooterPizza'
import Home from './views/Home'
import Pizza from './utils/APIs/Pizza'
import InputLogin from "./views/InputLogin"

function App() {

  return (
    <>
      <div id="root">
        <div className='main-content'>

          <Navbar />
          <Home/>
          <Pizza/>
          <InputLogin/>
          <RegForm/>
        </div>
        <Footer />

      </div>
    </>
  )
}

export default App
