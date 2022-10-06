import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import Card from '../../UI/Card'
import {sponsors} from '../../data.js'
import './sponsors.css'

const Sponsors = () => {
  return (
    <>
      <Header title="Sponsors" image={HeaderImage}>
        Learn more about being a team sponsor and companies that currently sponsor our team
      </Header>
      <section className="sponsors">
        <div className='container sponsors__container'>
          {
            sponsors.map(({id, name, desc, price, features}) => {
              return <Card key={id} className="sponsor">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h4>Features</h4>
                {
                  features.map(({feature}, index) => {
                    return <p key={index}>{feature}</p>
                  })
                }
              </Card>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Sponsors