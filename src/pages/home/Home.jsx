import MainHeader from '../../components/MainHeader'
import PagesDirect from '../../components/PagesDirect'
import FAQs from '../../components/FAQs'
import Captains from '../../components/Captains'
import Leads from '../../components/Leads'
import Footer from '../../components/Footer'

import './home.css'

const Home = () => {
  return (
    <>
      <MainHeader/>
      <PagesDirect/>
      <FAQs/>
      <Captains/>
      <Leads/>
      <Footer/>
    </>  
  )
}

export default Home