// `swiper/react` exports 2 components: `Swiper` and `SwiperSlide`
import React from 'react';
// import Swiper from 'swiper';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { background_hero_imgs } from '../data';

//swiper styles
import 'swiper/css'; //core swiper CSS
import 'swiper/css/autoplay'; //autoplay styles
import 'swiper/css/navigation'; //OPTIONAL NAVIGATION CSS
import 'swiper/css/pagination'; //OPTIONAL PAGINATION CSS
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Button from '../ui/button.component';
import { respond_to } from '../helpers/breakpoints';

const SlideContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),
    url(${({ bg_image }) => bg_image}) center center/cover;

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  /* justify-content: center; */
  text-align: center;
  color: ${({ theme }) => theme.colors.grey[0]};
  position: relative;

  ${respond_to('450px')} {
    height: 60vh;
  }
`;

const HeroTextWrapper = styled.div`
  max-width: 50%; //ensuring the text don't span over the whole bg image
  z-index: 2; //ensures text is above gradient overlay;
  margin-top: 24rem;

  ${respond_to('600px')} {
    max-width: 80%;
    margin-top: 20rem !important;
  }
`;

const HeroWelcome = styled.h2`
  text-transform: capitalize;
  letter-spacing: 0.2rem;
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
  margin-bottom: 2.5rem;
`;

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 400;
`;
const Subtitle = styled.p`
  margin-block: 3rem 2.5rem;
  max-width: 70%;
  margin-inline: auto;
  /* font-size: ${({ theme }) => theme.typography.text.small}; */
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

function HeroSwiper() {
  let hero_slide_elements = background_hero_imgs.map(
    ({ id, img, title, subtitle }) => (
      <SwiperSlide key={id}>
        <SlideContainer bg_image={img}>
          <HeroTextWrapper className="flex_items flex_column">
            <HeroWelcome className="text_primary">Welcome</HeroWelcome>
            <Title>{title}</Title>
            <Subtitle className="text_small">{subtitle}</Subtitle>
            <ButtonsContainer className="flex_items align_middle align_horizontal g_1">
              <Button type="primary" square={true} size="big">
                Order Now
              </Button>
              <Button type="transparent_light" square={true} size="big">
                View Menu
              </Button>
            </ButtonsContainer>
          </HeroTextWrapper>
        </SlideContainer>
      </SwiperSlide>
    )
  );
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 5000000000000000000000 }}
      // navigation
      // loop
      pagination={{ clickable: true }}
    >
      {hero_slide_elements}
    </Swiper>
  );
}

export default HeroSwiper;
