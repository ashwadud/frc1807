import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import StoryImage from '../../images/main__header.png'
import VisionImage from '../../images/logo.png'
import './calendar.css'

const calendar = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Scroll down to read about our history and how we built our team from the start.
    </Header>
    <section className="about__summary">
        <div className="container about__summary-container">
          <div className='about__section-content'>
            <h1>Team Summary</h1>
            <p>Located at Allentown High School in Allentown, New Jersey, Redbird Robotics was formed by an enthusiastic father in 2006. The team started with 16 students and 4 mentors. We have now tripled in size, consisting of 47 dedicated students and 14 mentors. During our rookie year, we received sponsorships from 3 companies and organizations. For the 2022 season, we have 11 corporate sponsorships and organizations. The majority of our 2021 sponsors have carried into the 2022 season, along with 2 new corporate sponsorships.</p>
            <p>Along with the increase of sponsors, our team has also greatly increased outreach efforts. Some of our outreach projects include leading multiple FIRST LEGO League teams, helping Girl Scout Troops earn their Programming Badge, annual robot demonstrations at our local elementary school’s STEM nights and local middle schools, installing a new LEGO Wall at our local elementary school. Our team is currently working on organizing more outreach programs in order to expose more young students to STEM. Our goal is to inform more people about the importance of STEM in education and the impact that FIRST has had on students all over the world.
</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Summary Image" />
          </div>
        </div>
      </section>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Story Image" />
        </div>
        <div className='about__section-content'>
          <h1>Our History</h1>
          <p>In 2006, our founders had a goal.  He wanted to start a First Robotics Team in Allentown High School in order to create an activity his son could partake in and enjoy. However, Mr. Nalbone did more than that; he created a community in Allentown High School diverse in skills and hobbies, but unified in STEAM (Science, Technology, Engineering, Arts, Mathematics).</p>
          <p>In Mr. Nalbone’s book, he discusses the steps neccesary in achieving his goal, as well as the success of FRC Team 1807: Redbird Robotics. Below is a PDF of the book, which provides the history and reasons our robotics team was created.</p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className='about__section-content'>
          <h1>Mission Statement</h1>
          <p>To provide an outlet for passionate students who want to explore their interests in STEM, business, and other aspects of FIRST Robotics. We aspire to engage dedicated students who are willing to work hard to achieve their goals. With our mentors and sponsors, we seek to provide members with the guidance, confidence, and resources necessary for success in FIRST and their careers.</p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Vision Image" />
        </div>
      </div>
    </section>

    
    </>
  )
}

export default calendar