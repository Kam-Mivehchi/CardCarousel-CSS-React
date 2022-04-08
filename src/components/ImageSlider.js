import { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((proj, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <div className="project-slide">

                                <img src={proj.img} alt="projects" className='image'></img>
                                <div className='slide-details'>
                                    <div className='slide-heading'>
                                        <h1>{proj.title}</h1>
                                        <div class="button-shell">
                                            <button className='button' href={proj.git} target='_blank'
                                                rel="noopener noreferrer">
                                                GitHub
                                            </button>
                                            <button href={proj.live} target='_blank'
                                                rel="noopener noreferrer" className='button' >
                                                Live Site
                                            </button>
                                        </div>
                                    </div>
                                    <p className='description'>{proj.desc}</p>
                                    <p className='tech'>{proj.tech.map((tech) => {
                                        return (
                                            <p className="eachTech">{tech}</p>
                                        )
                                    })}</p>
                                </div>
                            </div>
                        )}

                    </div>
                )
            })}
        </section >
    )
}

export default ImageSlider