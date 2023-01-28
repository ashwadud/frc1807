import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import {robots} from '../../data'
import Robot from '../../components/Robot'
import {SlDocs} from 'react-icons/sl'
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
              {icon: <SlDocs/>, link: docs[0]},
            ]
          } />
          })
        }
      </div>
    </section>
    </>
  )
}

export default Robots