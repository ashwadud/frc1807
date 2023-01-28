import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Robots from './pages/robots/Robots'
import Resources from './pages/resources/Resources'
import Sponsors from './pages/sponsors/Sponsors'
import Bios from './pages/bios/Bios'
import Blogs from './pages/Blogs/Blogs'
import Blog from './pages/Blog'
import Blackbird from './pages/blackbird/Blackbird'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='robots' element={<Robots/>}/>
        <Route path='resources' element={<Resources/>}/>
        <Route path='sponsors' element={<Sponsors/>}/>
        <Route path='bios' element={<Bios/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='blackbird' element={<Blackbird/>}/>
        <Route path='/blog/:id' component={Blog} />
        <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App