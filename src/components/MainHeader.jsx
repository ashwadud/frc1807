import {Link} from 'react-router-dom'
import Image from '../images/main__header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#FRC1807</h4>
          <h1>Redbird Robotics</h1>
          <p>
          Empowering students to apply engineering, leadership, and design skills in the FIRST Robotics Competition
          </p>
          <Link to="/about" className='btn lg'>About Us</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default MainHeader