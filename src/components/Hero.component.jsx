import React from 'react';
import OurContainer from './OurContainer.component';
import styled from 'styled-components';

const HeroContainer = styled.section`
  width: 100%;
  height: 75%;
`;

function Hero() {
  return (
    <HeroContainer>
      <OurContainer>
        <div className="hero_content">
          <h2>Hero goes here!</h2>
        </div>
      </OurContainer>
    </HeroContainer>
  );
}

export default Hero;
