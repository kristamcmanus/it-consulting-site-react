import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Glo Technology Solutions</HeroH1>
        <HeroP>
          We are a technology consulting firm that fosters ingenuity over conformity and finds inspiration in the unknown.
          We collaborate with organizations to build innovative technology solutions that drive results.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Contact Us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
