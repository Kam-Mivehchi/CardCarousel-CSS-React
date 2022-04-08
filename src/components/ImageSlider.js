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
        <section className='relative h-screen flex justify-center items-center'>
            <FaArrowAltCircleLeft className="text-8xl relative z-10 lg:mr-40  opacity-70" style={{ left: '5%' }} onClick={prevSlide} />
            {SliderData.map((proj, index) => {
                return (
                    <div
                        className={index === current ? 'opacity-1 duration-1000 scale-110 ' : 'opacity-0   ease-in-out duration-1000 transition'}
                        key={index}
                    >
                        {index === current && (
                            <div className="lg:max-w-[707px] w-3/4 max-h-fit mx-auto border-2 border-black rounded-lg ">

                                <img src={proj.img} alt="projects" className='aspect-video max-h-[400px] border-2 border-t-0 border-black rounded-lg drop-shadow-lg'></img>
                                <div className='w-11/12 mx-auto'>
                                    <div className='flex flex-col items-center text-2xl font-extrabold md:flex-row md:justify-between'>
                                        <h1>{proj.title}</h1>
                                        <div class="text-sm flex justify-between">
                                            <button className='py-1 px-5 border-2 rounded-full max-w-full mx-1 my-3 border-black font-bold ' href={proj.git} target='_blank'
                                                rel="noopener noreferrer">
                                                GitHub
                                            </button>
                                            <button href={proj.live} target='_blank'
                                                rel="noopener noreferrer" className='py-1 px-5 border-2 rounded-full max-w-full mx-1 my-3 border-black font-bold' >
                                                Live Site
                                            </button>
                                        </div>
                                    </div>
                                    <p className='text-xs md:text-base text-center font-semibold'>{proj.desc}</p>
                                    <p className='italic flex flex-wrap justify-center font-semibold my-3 opacity-50'>{proj.tech.map((tech) => {
                                        return (
                                            <p className="text-xs mx-1">{tech}</p>
                                        )
                                    })}</p>
                                </div>
                            </div>
                        )}

                    </div>
                )
            })}
            <FaArrowAltCircleRight className="text-8xl relative z-10 lg:ml-40 opacity-70 " style={{ right: '5%' }} onClick={nextSlide} />

        </section >
    )
}

export default ImageSlider