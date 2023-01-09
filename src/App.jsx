import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Calendar from './pages/calendar/Calendar'
import Sponsors from './pages/sponsors/Sponsors'
import Bios from './pages/bios/Bios'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Robots from './pages/robots/robots'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='calendar' element={<Calendar/>}/>
        <Route path='sponsors' element={<Sponsors/>}/>
        <Route path='bios' element={<Bios/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='robots'element={<Robots/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App