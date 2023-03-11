import {Link} from 'react-router-dom'

const BlackbirdHeader = () => {
  return (
    <header className="blackbird__header">
      <div className="blackbird__header-container">
        <div className="blackbird__header-center">
          <div className='bouter-heading'>
            <div className="binner-heading">
              <span>
                Blackbird <br/>
              </span>
            </div>
          </div>
          <h1>Robotics</h1>
          <p>
          Empowering students to apply engineering, leadership, and design skills in the FIRST Robotics Competition
          </p>
          <Link to="about" className='btn lg' id="bb">About</Link>
          <Link to="cad" className='btn lg' id="bb">CAD</Link>
          <Link to="code" className='btn lg' id="bb">Code</Link>
        </div>
      </div>
    </header>
  )
}

export default BlackbirdHeader