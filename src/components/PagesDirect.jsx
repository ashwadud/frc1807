import {FaRobot} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {pagesdirect} from '../data.js'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'


const PagesDirect = () => {
  return (
    <section className="pagesdirect">
        <div className="container pagesdirect">
          <SectionHead icon={<FaRobot/>} title="REDBIRD ROBOTICS FRC 1807"/>
        <div className="pages__wrapper">
          {
            pagesdirect.map(({id, icon, title, info, path}) => {
              return (
                <Card className="pages__page" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="btn sm">Read More <AiFillCaretRight/></Link>
                </Card>
              )
            })
          }
          </div>
        </div>
    </section>
  )
}

export default PagesDirect