import React from 'react'
import './Slider.css'
import SImg from '../Slider/images/1.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const SliderLanding = () => {

    return (
        <div className='Carousel_container'>
            <Carousel infiniteLoop showStatus={false} showArrows={false} showThumbs={false} interval={5000} autoPlay>
                <div style={{ position: 'relative' }}>
                    <img src={SImg} />
                    <div style={{ position: 'absolute', color: 'black', bottom: '20px', left: '40px' }}>
                        <p style={{ fontSize: '1.1rem', textAlign: 'start', cursor: 'pointer' }}>
                            <a style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                                სამინისტროს სიახლეები
                                <br />
                                გაიგე მეტი -----&
                            </a>
                        </p>
                    </div>
                </div>
                <div>
                    <img src={SImg} />
                    <div style={{ position: 'absolute', color: 'black', bottom: '20px', left: '40px' }}>
                        <p style={{ fontSize: '1.1rem', textAlign: 'start', cursor: 'pointer' }}>
                            <a style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                                სამინისტროს სიახლეები
                                <br />
                                გაიგე მეტი -----&
                            </a>
                        </p>
                    </div>
                </div>
                <div>
                    <img src={SImg} />
                    <div style={{ position: 'absolute', color: 'black', bottom: '20px', left: '40px' }}>
                        <p style={{ fontSize: '1.1rem', textAlign: 'start', cursor: 'pointer' }}>
                            <a style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                                სამინისტროს სიახლეები
                                <br />
                                გაიგე მეტი -----&
                            </a>
                        </p>
                    </div>
                </div>
                <div>
                    <img src={SImg} />
                    <div style={{ position: 'absolute', color: 'black', bottom: '20px', left: '40px' }}>
                        <p style={{ fontSize: '1.1rem', textAlign: 'start', cursor: 'pointer' }}>
                            <a style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                                სამინისტროს სიახლეები
                                <br />
                                გაიგე მეტი -----&
                            </a>
                        </p>
                    </div>
                </div>
                <div>
                    <img src={SImg} />
                    <div style={{ position: 'absolute', color: 'black', bottom: '20px', left: '40px' }}>
                        <p style={{ fontSize: '1.1rem', textAlign: 'start', cursor: 'pointer' }}>
                            <a style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                                სამინისტროს სიახლეები
                                <br />
                                გაიგე მეტი -----&
                            </a>
                        </p>
                    </div>
                </div>
                <div>
                    <img src={SImg} />
                    <div style={{ position: 'absolute', color: 'black', bottom: '20px', left: '40px' }}>
                        <p style={{ fontSize: '1.1rem', textAlign: 'start', cursor: 'pointer' }}>
                            <a style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                                სამინისტროს სიახლეები
                                <br />
                                გაიგე მეტი -----&
                            </a>
                        </p>
                    </div>
                </div>
                <div>
                    <img src={SImg} />
                    <div style={{ position: 'absolute', color: 'black', bottom: '20px', left: '40px' }}>
                        <p style={{ fontSize: '1.1rem', textAlign: 'start', cursor: 'pointer' }}>
                            <a style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                                სამინისტროს სიახლეები
                                <br />
                                გაიგე მეტი -----&
                            </a>
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
