import React from 'react';
import OurContainer from './OurContainer.component';
import NavBar from './NavBar.component';
import Hero from './Hero.component';
import HeroSwiper from './HeroSwiper.component';
import styled from 'styled-components';
import { respond_to } from '../helpers/breakpoints';

const Nav_and_hero_container = styled.div`
  width: 100%;
  height: 100vh;

  ${respond_to('450px')} {
    height: 60vh;
  }
`;

const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1; //keeps the swiper below the navbar
`;

function Nav_and_hero() {
  return (
    <Nav_and_hero_container>
      <OurContainer>
        {/* //navbar at the top */}
        <NavBar />

        {/* swiper section */}
        <SwiperWrapper>
          <HeroSwiper />
        </SwiperWrapper>
        {/* <Hero /> */}
      </OurContainer>
    </Nav_and_hero_container>
  );
}

export default Nav_and_hero;
