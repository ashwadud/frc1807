import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'

import './calendar.css'

const Calendar = () => {
  return (
    <>
      <Header title="Calendar" image={HeaderImage}>
        View the schedule and calendar of our team to be updated on all of our competitions and meetings.
      </Header>
    </>
  )
}

export default Calendar