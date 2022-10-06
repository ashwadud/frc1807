import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import StoryImage from '../../images/main__header.png'
import VisionImage from '../../images/logo.png'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Scroll down to read about our history and how we built our team from the start.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Story Image" />
        </div>
        <div className='about__section-content'>
          <h1>Our Story</h1>
          <p>Twelve years ago, our founder, Chris Nalbone, had a goal.  He wanted to start a First Robotics Team in Allentown High School in order to create an activity his son could partake in and enjoy. However, Mr. Nalbone did more than that; he created a community in Allentown High School diverse in skills and hobbies, but unified in STEAM (Science, Technology, Engineering, Arts, Mathematics).</p>
          <p>In Mr. Nalbone’s book, he discusses the steps neccesary in achieving his goal, as well as the success of FRC Team 1807: Redbird Robotics. Below is a PDF of the book, which provides the history and reasons our robotics team was created.</p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className='about__section-content'>
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium cupiditate aliquid harum facilis nisi autem explicabo iusto eius vitae distinctio ea, quidem quasi sunt totam nihil suscipit, neque facere ut.</p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Vision Image" />
        </div>
      </div>
    </section>
    </>
  )
}

export default About