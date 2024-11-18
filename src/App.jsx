/* eslint-disable no-unused-vars */
import './App.css'
import InputForm from './components/Forms/RegisterForm.jsx/InputForm'
import Navbar from './components/Navbars/Navbar'
import Footer from './pages/Footer/FooterPizza'
import Home from './pages/Home/Home'
import InputLogin from './components/Forms/LoginForm/InputLogin'
import Cart from "./components/Cart/Cart";

function App() {

  return (
    <>
      <div id="root">
        <div className='main-content'>

          <Navbar />
          <Cart/>
          {/* <Home/> */}
          {/* <InputForm/> */}
          {/* <InputLogin /> */}
        </div>
        <Footer />

      </div>
    </>
  )
}

export default App
