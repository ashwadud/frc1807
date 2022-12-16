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
    </Card>
  )
}

export default Member