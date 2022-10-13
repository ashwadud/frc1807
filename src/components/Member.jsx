import Card from '../UI/Card'

const Member = ({image, name, year, job, socials}) => {
  return (
    <Card className="member">
        <div className="member__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <h4>{year}</h4>
        <p>{job}</p>
        <div className="member__socials">
            {
                socials.map(({icon, link}, index) => {
                    return <a key={index} href={link} target="_blank" rel="noreffer noopener">{icon}</a>
                })
            }
        </div>
    </Card>
  )
}

export default Member