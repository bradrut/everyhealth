import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

import ImageHeading from './ImageHeading';

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
    >
      <Carousel.Slide className='slide'>
        <ImageHeading/>
      </Carousel.Slide>
      <Carousel.Slide className='slide'>
        <p>Slide 2</p>
      </Carousel.Slide>
      <Carousel.Slide className='slide'>
      <p>Slide 3</p>
      </Carousel.Slide>
    </Carousel>
  );
}
