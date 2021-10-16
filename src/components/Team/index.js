import React from 'react';
import Team1 from '../../images/team-1.jpg';
import Team2 from '../../images/team-2.jpg';
import Team3 from '../../images/team-3.jpg';

import { TeamContainer, TeamH1, TeamWrapper, TeamCard, TeamIcon, TeamH2, TeamP } from './TeamElements';

const Team = () => {
  return (
    <TeamContainer id='team'>
      <TeamH1>Our Team</TeamH1>
      <TeamWrapper>
        <TeamCard>
          <TeamIcon src={Team1} alt='IT consulting'/>
          <TeamH2>IT Consulting</TeamH2>
          <TeamP>You might consider hiring someone internally, but often times outsourcing your IT services a smarter route to go. We can help.</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Team2} alt='network security'/>
          <TeamH2>Network Security</TeamH2>
          <TeamP>Businesses are targets for cybercriminals to launch highly sophisticated cyber threats against, particularly the small to mid-sized firm.</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Team3} alt='cloud solutions'/>
          <TeamH2>Cloud Solutions</TeamH2>
          <TeamP>Glo Tech can create a cloud-based technology infrastructure that adapts to and evolves alongside your business.</TeamP>
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  )
}

export default Team;
