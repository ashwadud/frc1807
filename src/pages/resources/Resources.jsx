import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import Footer from '../../components/Footer'

import './resources.css'

const Calendar = () => {
  return (
    <>
      <Header title="Resources" image={HeaderImage}>
        View the schedule and calendar of our team to be updated on all of our competitions and meetings.
      </Header>
      <Footer/>
    </>
  )
}

export default Calendar