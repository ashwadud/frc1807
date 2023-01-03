import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'

import './robots.css'

const Robots = () => {
    return (
        <>
        <Header title="Robots" image={HeaderImage}>
          View our different Robots over the years.
        </Header>
        <section className='Robots' >
        <div className="container Robots__container">
<h1>
    Robots
</h1>


        </div>
        </section>
        </>
        
    )
  }

  export default Robots