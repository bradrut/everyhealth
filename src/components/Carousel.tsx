import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

import ImageHeading from './ImageHeading';
import CairnImage from '../assets/cairn.jpg';
import MeditationImage from '../assets/meditation.jpg';
import './Carousel.css';

export default function HomeCarousel() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  
  return (
    <Carousel
      className='carousel'
      withIndicators
      loop={true}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      slideGap={25}
      slideSize={'100%'}
    >
      <Carousel.Slide className='slide'>
        <ImageHeading/>
      </Carousel.Slide>
      <Carousel.Slide className='slide'>
        <img src={MeditationImage} className='meditation-img' alt="Person meditating outdoors for mental health awareness month"/>
      </Carousel.Slide>
      {/* <Carousel.Slide className='slide'>
        <p>Slide 3</p>
      </Carousel.Slide> */}
    </Carousel>
  );
}
