import {Link} from 'react-router-dom'
import Logo from '../images/bblogo.png'

const BlackbirdFooter = () => {
  return (
    <footer id="bb">
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Empowering students to apply engineering, leadership, and design skills in FIRST® Robotics competitions.
                </p>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/robots">Robots</Link>
                <Link to="/resources">Resources</Link>
                <Link to="/sponsors">Sponsors</Link>
                <Link to="/bios">Bios</Link>
            </article>
            <article>
                <h4>Resources</h4>
                <a href="https://www.firstinspires.org/robotics/frc" target="blank">FIRST Robotics Competition</a>
                <a href="https://ahs.ufrsd.net" target="blank">Allentown High School</a>
                <Link to="/blogs">Our Blog</Link>
            </article>    
        </div><div className="footer__copyright" id="bb">
                <small>FRC 1807 | Allentown High School Allentown, NJ</small>
            </div>
    </footer>
  )
}

export default BlackbirdFooter