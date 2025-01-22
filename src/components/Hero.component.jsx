import React, { createContext, useContext } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { respond_to } from '../helpers/breakpoints';

// Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroContext = createContext();

const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  ${respond_to('450px')} {
    height: 60vh;
  }
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),
    url(${({ bgImage }) => bgImage}) center center/cover;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey[0]};
  position: relative;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Main Hero component
function Hero({
  children,
  slides = [],
  autoplay = true,
  loop = true,
  pagination = true,
}) {
  const contextValue = {
    slides,
  };

  return (
    <HeroContext.Provider value={contextValue}>
      <HeroContainer>
        {slides.length > 0 ? (
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={autoplay ? { delay: 5000 } : false}
            loop={loop}
            pagination={pagination ? { clickable: true } : false}
            style={{ width: '100%', height: '100%' }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id || index}>
                <SlideContainer bgImage={slide.img}>
                  <ContentWrapper>{children}</ContentWrapper>
                </SlideContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <SlideContainer>
            <ContentWrapper>{children}</ContentWrapper>
          </SlideContainer>
        )}
      </HeroContainer>
    </HeroContext.Provider>
  );
}

// Sub-components
const TextWrapper = styled.div`
  max-width: 50%;
  text-align: center;
  margin-top: ${({ marginTop }) => marginTop || '24rem'};

  ${respond_to('600px')} {
    max-width: 80%;
  }
`;

const Welcome = styled.h2`
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
  /* font-size: ${({ theme }) => theme.typography.text.tiny}; */
  font-size: ${({ theme }) => theme.typography.text.small};
  font-weight: 300;
`;

Hero.Text = function HeroText({ children, marginTop }) {
  return <TextWrapper marginTop={marginTop}>{children}</TextWrapper>;
};

Hero.Welcome = function HeroWelcome({ children }) {
  return <Welcome className="text_primary">{children}</Welcome>;
};

Hero.Title = function HeroTitle({ children }) {
  return <Title>{children}</Title>;
};

Hero.Subtitle = function HeroSubtitle({ children }) {
  return <Subtitle className="text_small">{children}</Subtitle>;
};

Hero.Content = function HeroContent({ children, style }) {
  return (
    <div style={{ position: 'relative', zIndex: 2, ...style }}>{children}</div>
  );
};

export default Hero;
