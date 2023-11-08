import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import SImg from './2.png';
import SImg2 from '../Slider/3.png';
import './SliderNika.css';
import { Button } from 'antd';
export const SliderNika = () => {
  return (
    <Carousel
      className="carousel_Login"
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      showThumbs={false}
      interval={5000}
      autoPlay
    >
      <div style={{ position: 'relative', backgroundColor: '#FFFF' }}>
        <img className="carousel_Img" src={SImg} />
        <div className="moh">
          <div style={{ width: '75%', marginRight: '50px', marginBottom: '20px' }}>
            <h2 style={{ color: '#FFFF', textAlign: 'start' }}>
              გადადი MOH.GOV.GE-ზე და გაიგე
              <br />
              სამინისტროს სიახლეები
            </h2>
            <Button
              style={{
                color: '#FFFF',
                width: '100%',
                background: '#051C7D',
                borderRadius: '20px',
                height: '48px',
              }}
            >
              გაიგეთ მეტი
            </Button>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', backgroundColor: '#FFFF' }}>
        <img className="carousel_Img" src={SImg} />
        <div className="moh">
          <div style={{ width: '75%', marginRight: '50px', marginBottom: '20px' }}>
            <h2 style={{ color: '#FFFF', textAlign: 'start' }}>
              გადადი MOH.GOV.GE-ზე და გაიგე
              <br />
              სამინისტროს სიახლეები
            </h2>
            <Button
              style={{
                color: '#FFFF',
                width: '100%',
                background: '#051C7D',
                borderRadius: '20px',
                height: '48px',
              }}
            >
              გაიგეთ მეტი
            </Button>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', backgroundColor: '#FFFF' }}>
        <img className="carousel_Img" src={SImg} />
        <div className="moh">
          <div style={{ width: '75%', marginRight: '50px', marginBottom: '20px' }}>
            <h2 style={{ color: '#FFFF', textAlign: 'start' }}>
              გადადი MOH.GOV.GE-ზე და გაიგე
              <br />
              სამინისტროს სიახლეები
            </h2>
            <Button
              style={{
                color: '#FFFF',
                width: '100%',
                background: '#051C7D',
                borderRadius: '20px',
                height: '48px',
              }}
            >
              გაიგეთ მეტი
            </Button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
