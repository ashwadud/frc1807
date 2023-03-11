import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/blackbird/Blackbird'
import NotFound from './pages/notFound/NotFound'
import BlackbirdNavbar from './components/BlackbirdNavbar'

const BlackbirdApp = () => {
  return (
    <BrowserRouter>
      <BlackbirdNavbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default BlackbirdApp