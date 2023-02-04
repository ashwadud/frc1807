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
            <p>Located at Allentown High School in Allentown, New Jersey, Redbird Robotics was formed by an enthusiastic father in 2006. The team started with 16 students and 4 mentors. We have now tripled in size, consisting of 47 dedicated students and 14 mentors. During our rookie year, we received sponsorships from 3 companies and organizations. For the 2022 season, we have 11 corporate sponsorships and organizations. The majority of our 2021 sponsors have carried into the 2022 season, along with 2 new corporate sponsorships.</p>
            <p>Along with the increase of sponsors, our team has also greatly increased outreach efforts. Some of our outreach projects include leading multiple FIRST LEGO League teams, helping Girl Scout Troops earn their Programming Badge, annual robot demonstrations at our local elementary school’s STEM nights and local middle schools, installing a new LEGO Wall at our local elementary school. Our team is currently working on organizing more outreach programs in order to expose more young students to STEM. Our goal is to inform more people about the importance of STEM in education and the impact that FIRST has had on students all over the world.
</p>
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