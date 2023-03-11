import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import {robots} from '../../data'
import Robot from '../../components/Robot'
import Footer from '../../components/Footer'
import {GrGithub} from 'react-icons/gr'
import './robots.css'

const Robots = () => {
  return (
    <>
    <Header title="Robots" image={HeaderImage}>
      View the our robots and their documentation over the years!
    </Header>
    <section className="robots">
      <div className="container robots__container">
        {
          robots.map(({id, image, game, year, docs}) => {
          return <Robot key={id} image={image} game={game} year={year} docs={
            [
              {icon: <GrGithub/>, link: docs[0]},
            ]
          } />
          })
        }
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Robots