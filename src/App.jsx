import './App.css'
import CustomCard from './components/Cards/customCard'
import Navbar from './components/Navbars/Navbar'
import Footer from './pages/Footer/FooterPizza'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <CustomCard/>
    <Footer/>
    </>
  )
}

export default App
