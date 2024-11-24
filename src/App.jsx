import { Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav"
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage'
import PropertyDetailsPage from './pages/PropertyDetailsPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
    <div className="sm:bg-green-700 md:bg-red-700 lg:bg-yellow-700 xl:bg-pink-700"><h1 className="">check size</h1></div>
    <Nav/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/properties' element={<PropertiesPage/>}/>
    <Route path='/properties/:id' element={<PropertyDetailsPage/>}/>
    <Route path='/services' element={<ServicesPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
    <div className="sm:bg-green-700 md:bg-red-700 lg:bg-yellow-700 xl:bg-pink-700"><h1 className="">check size</h1></div>
    </>
  )
}

export default App
