import { Carousel } from 'antd'
import React, { useRef } from 'react'
import thumb from '../../assets/images/thumb_1.png'
import carouselImg from '../../assets/images/carouselImg.svg'
import './Slider.css';




const Slider = () => {

    const onChangeCarousel = (currentSlide: any) => {
        console.log(currentSlide);
    };

    const ref1 = useRef<any>()

    return (
        <div className='carousel-main_container'>
            <Carousel afterChange={onChangeCarousel} slidesToShow={1} slidesToScroll={1} draggable ref={ref1}
                arrows={false} >
                <div className='carousel-container'>
                    <img className='cardImg3' src={carouselImg} alt="example" />
                    <div className='carousel-btn-container'>
                        <p>სამინისტროში მიმდინარე სიახლეები</p>
                    </div>
                </div>
                <div className='carousel-container'>
                    <img className='cardImg3' src={carouselImg} alt="example" />
                    <div className='carousel-btn-container'>
                        <p>სამინისტროში მიმდინარე სიახლეები</p>
                    </div>
                </div>
                <div className='carousel-container'>
                    <img className='cardImg3' src={carouselImg} alt="example" />
                    <div className='carousel-btn-container'>
                        <p>სამინისტროში მიმდინარე სიახლეები</p>
                    </div>
                </div>
                <div className='carousel-container'>
                    <img className='cardImg3' src={carouselImg} alt="example" />
                    <div className='carousel-btn-container'>
                        <p>სამინისტროში მიმდინარე სიახლეები</p>
                    </div>
                </div>
                <div className='carousel-container'>
                    <img className='cardImg3' src={carouselImg} alt="example" />
                    <div className='carousel-btn-container'>
                        <p>სამინისტროში მიმდინარე სიახლეები</p>
                    </div>
                </div>
                <div className='carousel-container'>
                    <img className='cardImg3' src={carouselImg} alt="example" />
                    <div className='carousel-btn-container'>
                        <p>სამინისტროში მიმდინარე სიახლეები</p>
                    </div>
                </div>

            </Carousel>
        </div>
    )
}

export default Slider