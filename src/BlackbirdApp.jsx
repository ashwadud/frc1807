import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/blackbird/Blackbird'
import About from './pages/blackbird/About'
import CAD from './pages/blackbird/CAD'
import Code from './pages/blackbird/Code'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/BlackbirdNavbar'
import Footer from './components/BlackbirdFooter'


const BlackbirdApp = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='blackbird/cad' element={<CAD/>}/>
        <Route path='blackbird/code' element={<Code/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default BlackbirdApp