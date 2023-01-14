import Card from '../UI/Card'

const Robot = ({image, game, year, docs}) => {
  return (
    <Card className="robot">
        <div className="robot__img">
            <img src={image} alt={game} />
        </div>
        <h3>{game}</h3>
        <h4>{year}</h4>
        <div className="robots_docs">
          {
            docs.map(({icon,link}, index) => {
              return <a key={index} href={link} rel='noreferrer noopener'>{icon} </a>
            })
          }
        </div>
    </Card>
  )
}

export default Robot