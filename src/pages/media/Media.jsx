import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'

import './media.css'

const Media = () => {
    const galleryLength = 5;
    const images = []

    for(let i = 1; i <= galleryLength; i++) {
        images.push(require(`../../images/media/${i}.png`))
    }

    return (
        <>
        <Header title="Media" image={HeaderImage}>
            Check out some photos that we've gathered over the years at our competitions!
        </Header>
        <section className="media">
            <div className="container media__container">
                {
                    images.map((image, index) => {
                        return <article key={index}>
                            <img src={image} alt={`Media Image ${index + 1}`} />
                        </article>
                    })
                }
            </div>
        </section>
        </>
    )
}

export default Media