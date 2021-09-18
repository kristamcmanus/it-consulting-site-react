import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt='IT consulting'/>
          <ServicesH2>IT Consulting</ServicesH2>
          <ServicesP>You might consider hiring someone internally, but often times outsourcing your IT services a smarter route to go. We can help.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} alt='network security'/>
          <ServicesH2>Network Security</ServicesH2>
          <ServicesP>Businesses are targets for cybercriminals to launch highly sophisticated cyber threats against, particularly the small to mid-sized firm.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt='cloud solutions'/>
          <ServicesH2>Cloud Solutions</ServicesH2>
          <ServicesP>Glo Tech can create a cloud-based technology infrastructure that adapts to and evolves alongside your business.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
