import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'

import './sponsors.css'

const Media = () => {
    const platinumGalleryLength = 1;
    const goldGalleryLength = 10;
    const platinum = []
    const gold = []

    for(let i = 1; i <= platinumGalleryLength; i++) {
        platinum.push(require(`../../images/sponsors/platinum/${i}.png`))
    }

    for(let i = 1; i <= goldGalleryLength; i++) {
      gold.push(require(`../../images/sponsors/gold/${i}.png`))
    }

    return (
        <>
        <Header title="Sponsors" image={HeaderImage}>
            Check out some photos that we've gathered over the years at our competitions!
        </Header>
        <h1 className='head'>Platinum Sponsors</h1>
        <section className="platinum">
            <div className="container platinum__container">
                {
                    platinum.map((image, index) => {
                        return <article key={index}>
                            <img src={image} alt={`Media Image ${index + 1}`} />
                        </article>
                    })
                }
            </div>
        </section>

        <h1 className='head'>Gold Sponsors</h1>
        <section className="gold">
            <div className="container gold__container">
                {
                    gold.map((image, index) => {
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