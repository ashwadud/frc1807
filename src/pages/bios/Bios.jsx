import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import {bios} from '../../data'
import Member from '../../components/Member'
import {SlDocs} from 'react-icons/sl'

import './bios.css'

const Bios = () => {
  return (
    <>
    <Header title="Team Members" image={HeaderImage}>
      View the list of all of our team members and their contact information.
    </Header>
    <section className="members">
      <div className="container members__container">
        {
          bios.map(({id, image, name, year, job, docs}) => {
          return <Member key={id} image={image} name={name} year={year} job={job} docs={
            [
              {icon: <SlDocs/>, link: docs},
            ]
          } />
          })
        }
      </div>
    </section>
    </>
  )
}

export default Bios