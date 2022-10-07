import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import Card from '../../UI/Card'
import {sponsors} from '../../data.js'
import './sponsors.css'

const Sponsors = () => {
  return (
    <>
    <Header title="Sponsors" image={HeaderImage}>
      Learn more about our sponsor program and how you can be involved
    </Header>
    <section className="sponsors">
      <div className="container sponsors__container">
        {
          sponsors.map(({id, name, desc, price, features}) => {
            return <Card key={id} className="sponsor">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1>
              <h4>Features</h4>
              {
                features.map(({feature, available}, index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
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