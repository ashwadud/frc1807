import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias dicta omnis eligendi magni deleniti numquam cumque corporis fugiat amet distinctio? Soluta, placeat nesciunt sapiente facilis eligendi natus reiciendis fugiat dolor.
                </p>
                <div className="footer__socials">
                    <a href="https://instagram.com/frc1807" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
                    <a href="https://twitter.com/frc1807" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
                    <a href="https://facebook.com/redbirdrobotics" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                    <a href="https://www.youtube.com/channel/UCwgyk5kyJAoW2RJvigZI3Rw" target="_blank" rel="noreferrer noopener"><FaYoutube/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/calendar">Calendar</Link>
                <Link to="/sponsors">Sponsors</Link>
                <Link to="/bios">Bios</Link>
            </article>
            <article>
                <h4>Resources</h4>
                <a href="https://www.firstinspires.org/robotics/frc" target="_blank">FIRST Robotics Competition</a>
                <a href="https://ahs.ufrsd.net" target="_blank">Allentown High School</a>
                <Link to="/sponsors">Our Blog</Link>
            </article>    
        </div><div className="footer__copyright">
                <small>FRC 1807 | Allentown High School Allentown, NJ</small>
            </div>
    </footer>
  )
}

export default Footer