import {Link} from 'react-router-dom'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="main__header-container">
        <div className="main__header-center">
          <h1>
            <div class="words">
              <span>Allentown</span>
              <span>Redbird</span>
              <span>Blackbird</span> 
            </div>
            
            Robotics</h1>
          <p>
          Empowering students to apply engineering, leadership, and design skills in the FIRST Robotics Competition
          </p>
          <Link to="/about" className='btn lg'>1807</Link>
          <Link to="/bios" className='btn lg'>1812</Link>
        </div>
        {/* <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div> */}
        
      </div>
    </header>
  )
}

export default MainHeader