import Logo from '../images/bblogo.png'
import './blackbirdsummary.css'

const About = () => {
  return (
    <>
    <body id="bb">
    <section className="bbabout__summary">
        <div className="container bbabout__summary-container">
          <div className='bbabout__section-content'>
            <h1>About Us</h1>
            <p>Established in 2022, Blackbird is a sub-divison of Allentwon Robotics to give more members a hands on experience and create more advanced engineers and therefore a better team.</p>
          </div>
          <div className="bbabout__section-image">
            <img src={Logo} alt="Summary" />
          </div>
        </div>
      </section>
    </body>
    </>
  )
}

export default About