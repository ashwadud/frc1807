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


// Bios Files // 
import Waduda from './pages/bios/Team/waduda/Waduda' 
import Desaia from './pages/bios/Team/desaia/Desaia'
import Denizb from './pages/bios/Team/denizb/Denizb'
import Bajajt from './pages/bios/Team/bajajt/Bajajt'
import Biellog from './pages/bios/Team/biellog/Biellog'
import Chaudrya from './pages/bios/Team/chaudrya/Chaudrya'
import Christinec from './pages/bios/Team/christinec/Christinec'
import Conroyj from './pages/bios/Team/conroyj/Conroyj'
import Desaiv from './pages/bios/Team/desaiv/Desaiv'
import Diazt from './pages/bios/Team/diazt/Diazt'
import Eganc from './pages/bios/Team/eganc/Eganc'
import Elwellg from './pages/bios/Team/elwellg/Elwellg'
import Fortej from './pages/bios/Team/fortej/Fortej'
import Fortschr from './pages/bios/Team/fortschr/Fortschr'
import Georgej from './pages/bios/Team/georgej/Georgej'
import Granaghanl from './pages/bios/Team/granaghanl/Granaghanl'
import Greenbauml from './pages/bios/Team/greenbauml/Greenbauml'
import Haddockj from './pages/bios/Team/haddockj/Haddockj'
import Hellerd from './pages/bios/Team/hellerd/Hellerd'
import Hornr from './pages/bios/Team/hornr/Hornr'
import Hueye from './pages/bios/Team/hueye/Hueye'
import Kabae from './pages/bios/Team/kabae/Kabae'
import Landaua from './pages/bios/Team/landaua/Landaua'
import Lichterl from './pages/bios/Team/lichterl/Lichterl'
import Lichtmanr from './pages/bios/Team/lichtmanr/Lichtmanr'
import Lotruglioa from './pages/bios/Team/lotruglioa/Lotruglioa'
import Malteset from './pages/bios/Team/malteset/Malteset'
import Manvarr from './pages/bios/Team/manvarr/Manvarr'
import Marquesn from './pages/bios/Team/marquesn/Marquesn'
import Maym from './pages/bios/Team/maym/Maym'
import Millers from './pages/bios/Team/millers/Millers'
import Murthya from './pages/bios/Team/murthya/Murthya'
import Nagaliv from './pages/bios/Team/nagaliv/Nagaliv'
import Nohillyg from './pages/bios/Team/nohillyg/Nohillyg'
import Normandg from './pages/bios/Team/normandg/Normandg'
import Pusczkoo from './pages/bios/Team/pusczkoo/Pusczkoo'
import Roohrj from './pages/bios/Team/roohrj/Roohrj'
import Saccam from './pages/bios/Team/saccam/saccam'
import Saina from './pages/bios/Team/saina/Saina'
import Schafferl from './pages/bios/Team/schafferl/Schafferl'
import Schaffern from './pages/bios/Team/schaffern/Schaffern'
import Scheuermanj from './pages/bios/Team/scheuermanj/Scheuermanj'
import Singha from './pages/bios/Team/singha/Singha'
import Thomast from './pages/bios/Team/thomast/Thomast'
import Trickera from './pages/bios/Team/trickera/Trickera'
import Valentinoj from './pages/bios/Team/valentinoj/Valentinoj'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='robots' element={<Robots />} />
        <Route path='resources' element={<Resources />} />
        <Route path='sponsors' element={<Sponsors />} />
        <Route path='bios' element={<Bios />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='blackbird' element={<Blackbird />} />
        <Route path='/blog/:id' component={Blog} />
        <Route path='*' element={<NotFound />} />



        <Route path='waduda' element={<Waduda />} />
        <Route path='desaia' element={<Desaia />} />
        <Route path='denizb' element={<Denizb />} />
        <Route path='bajajt' element={<Bajajt />} />
        <Route path='biellog' element={<Biellog />} />
        <Route path='chaudrya' element={<Chaudrya />} />
        <Route path='christinec' element={<Christinec />} />
        <Route path='conroyj' element={<Conroyj />} />
        <Route path='desaiv' element={<Desaiv/>} />
        <Route path='diazt' element={<Diazt/>} />
        <Route path='eganc' element={<Eganc/>} />
        <Route path='elwellg' element={<Elwellg/>} />
        <Route path='fortej' element={<Fortej/>} />
        <Route path='fortschr' element={<Fortschr/>} />
        <Route path='georgej' element={<Georgej/>} />
        <Route path='granaghanl' element={<Granaghanl/>} />
        <Route path='greenbauml' element={<Greenbauml/>} />
        <Route path='haddockj' element={<Haddockj/>} />
        <Route path='hellerd' element={<Hellerd/>} />
        <Route path='hornr' element={<Hornr/>} />
        <Route path='hueye' element={<Hueye/>} />
        <Route path='kabae' element={<Kabae/>} />
        <Route path='landaua' element={<Landaua/>} />
        <Route path='lichterl' element={<Lichterl/>} />
        <Route path='lichtmanr' element={<Lichtmanr/>} />
        <Route path='lotruglioa' element={<Lotruglioa/>} />
        <Route path='malteset' element={<Malteset/>} />
        <Route path='manvarr' element={<Manvarr/>} />
        <Route path='marquesn' element={<Marquesn/>} />
        <Route path='maym' element={<Maym/>} />
        <Route path='millers' element={<Millers/>} />
        <Route path='murthya' element={<Murthya/>} />
        <Route path='nagaliv' element={<Nagaliv/>} />
        <Route path='nohillyg' element={<Nohillyg/>} />
        <Route path='normandg' element={<Normandg/>} />
        <Route path='pusczkoo' element={<Pusczkoo/>} />
        <Route path='roohrj' element={<Roohrj/>} />
        <Route path='saccam' element={<Saccam/>} />
        <Route path='saina' element={<Saina/>} />
        <Route path='schafferl' element={<Schafferl/>} />
        <Route path='schaffern' element={<Schaffern/>} />
        <Route path='scheuermanj' element={<Scheuermanj/>} />
        <Route path='singha' element={<Singha/>} />
        <Route path='thomast' element={<Thomast/>} />
        <Route path='trickera' element={<Trickera/>} />
        <Route path='valentinoj' element={<Valentinoj/>} />
       


       

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App