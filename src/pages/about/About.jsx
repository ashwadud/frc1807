import Header from '../../components/Header'
import HeaderImage from '../../images/main__header.png'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Scroll down to read about our history and how we built our team from the start.
    </Header>
    </>
  )
}

export default About