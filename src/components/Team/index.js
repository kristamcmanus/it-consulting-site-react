import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon5 from '../../images/svg-5.svg';

import { TeamContainer, TeamH1, TeamWrapper, TeamCard, TeamIcon, TeamH2, TeamP } from './TeamElements';

const Team = () => {
  return (
    <TeamContainer id='team'>
      <TeamH1>Our Team</TeamH1>
      <TeamWrapper>
        <TeamCard>
          <TeamIcon src={Icon1} alt='IT consulting'/>
          <TeamH2>IT Consulting</TeamH2>
          <TeamP>You might consider hiring someone internally, but often times outsourcing your IT services a smarter route to go. We can help.</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Icon2} alt='network security'/>
          <TeamH2>Network Security</TeamH2>
          <TeamP>Businesses are targets for cybercriminals to launch highly sophisticated cyber threats against, particularly the small to mid-sized firm.</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Icon5} alt='cloud solutions'/>
          <TeamH2>Cloud Solutions</TeamH2>
          <TeamP>Glo Tech can create a cloud-based technology infrastructure that adapts to and evolves alongside your business.</TeamP>
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  )
}

export default Team;
