import { useState } from 'react'
import SectionHead from './SectionHead'
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../UI/Card'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import {quotes} from '../data'


const Quotes = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = quotes[index];

    const prevLeadHandler = () => {
      setIndex(prev => prev - 1);

      if(index <= 0) {
        setIndex(quotes.length - 1);
      }
    }

    const nextLeadHandler = () => {
      setIndex(prev => prev + 1);

      if(index >= quotes.length - 1) {
        setIndex(0);
      }
    }
  return (
    <section className="leads">
      <div className="container leads__container">
        <SectionHead icon={<ImQuotesLeft/>} title="Quotes from The Team" className="leads__head"/>
        <Card className="lead">
          <div className='lead__avatar'>
            <img src={avatar} alt={name} />
          </div>
          <p className="lead__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="leads__btn-container">
          <button className="leads__btn" onClick={prevLeadHandler}><IoIosArrowDropleftCircle/></button>
          <button className="leads__btn" onClick={nextLeadHandler}><IoIosArrowDroprightCircle/></button>
        </div>
      </div>
    </section>
  )
}

export default Quotes