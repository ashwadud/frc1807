import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import {AiFillMail} from 'react-icons/ai'
import {BsInstagram}  from 'react-icons/bs'
import {bios} from '../../data'
import Member from '../../components/Member'

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
          bios.map(({id, image, name, year, job, socials}) => {
          return <Member key={id} image={image} name={name} year={year} job={job} socials={
            [
              {icon: <BsInstagram/>, link: socials[0]}
            ]
          }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Bios