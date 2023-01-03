import {Link} from 'react-router-dom'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="main__header-container">
        <div className="main__header-center">
          <div className='outer-heading'>
            <div className="inner-heading">
              <span>
                Allentown <br/>
                Redbird <br/>
                Blackbird <br/>
              </span>
            </div>
          </div>
          <h1>Robotics</h1>
          <p>
          Empowering students to apply engineering, leadership, and design skills in the FIRST Robotics Competition
          </p>
          <Link to="/about" className='btn lg'>1807</Link>
          <Link to="/calendar" className='btn lg'>1812</Link>
        </div>
      </div>
    </header>
  )
}

export default MainHeader