import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

//swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import Testimonials from './Testimonials.component';
import styled from 'styled-components';
import { testimonials } from '../data';
import { FaQuoteLeft } from 'react-icons/fa6';
import { respond_to } from '../helpers/breakpoints';

const TestimonialContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  padding-inline-start: 9rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.primary}; /* Example color */
  overflow: visible; //Allow the image to overflow
  /* overflow: hidden; */

  /* text-align: left;
  margin-left: 7rem;
  color: ${({ theme }) => theme.colors.grey[0]}; */

  /* p {
    font-size: ${({ theme }) => theme.typography.text.tiny};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 2rem;
    /* margin-inline-start: 7rem; 
    width: 70%;
    position: relative;
    /* color: ${({ theme }) => theme.colors.black.black_500}; 
  }

  .customer_name {
    font-weight: bold;
    /* font-size: 1.2rem; 
    font-size: ${({ theme }) => theme.typography.text.xxs};
    text-transform: capitalize;
    letter-spacing: 0.09rem;
    color: ${({ theme }) => theme.colors.grey[500]};
    margin-block: 0.5rem auto;
  }

  .customer_occupation {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.grey[500]};
    /* color: ${({ theme }) => theme.colors.grey[500]}; 
  } */

  svg {
    /* margin-left: 7rem; */
    height: 4rem;
    width: 4rem;
    color: ${({ theme }) => theme.colors.black.black_500};
    position: absolute;
    top: -2.5rem;
    left: -4.5rem;
  }

  ${respond_to('1100px')} {
    /* padding: 1.5rem; */
  }

  ${respond_to('900px')} {
    gap: 0;
    align-items: start;
    /* padding-left: 7rem; */
    padding-inline: 12rem 6rem;
    padding-block: 4rem;
    margin-left: 0;
    flex-flow: column-reverse wrap;

    p {
      order: -1;
      font-size: ${({ theme }) => theme.typography.text.small} !important;
      font-weight: 500;
      width: 100%;
    }

    .testimonial_img_wrapper {
      order: -2;
    }

    .customer_name {
      order: -3;
      /* margin-block: 1.2rem; */
    }

    .customer_occupation {
      order: -4;
    }
  }
`;

const TestimonialImgWrapper = styled.div`
  position: relative;
  flex-shrink: 0; /* Prevent the wrapper from shrinking */
  height: 20rem; /* Adjust the size as needed */
  width: 20rem; /* Adjust the size as needed */
  z-index: 1; /* Ensure the image is above the background */
  overflow: visible;

  .testimonial_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.4); /* Scale the image slightly */
    border-radius: 5%; /* Make the image circular */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Add shadow for depth */
  }

  ${respond_to('900px')} {
    order: 2;
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    align-self: flex-start;
    /* margin-left: 7rem; */

    .testimonial_img {
      transform: none;
      border-radius: 50%;
    }
  }
`;

const TestimonialInfo = styled.div`
  flex: 1;
  z-index: 2;
  text-align: left;
  margin-left: 7rem;
  color: ${({ theme }) => theme.colors.grey[0]};
  p {
    font-size: ${({ theme }) => theme.typography.text.xs};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 2rem;
    /* margin-inline-start: 7rem; */
    width: 70%;
    position: relative;
    /* color: ${({ theme }) => theme.colors.black.black_500}; */
  }

  .customer_name {
    font-weight: bold;
    /* font-size: 1.2rem; */
    font-size: ${({ theme }) => theme.typography.text.xxs};
    text-transform: capitalize;
    letter-spacing: 0.09rem;
  }

  .customer_occupation {
    font-size: 1rem;
    /* color: ${({ theme }) => theme.colors.grey[500]}; */
  }

  svg {
    /* margin-left: 7rem; */
    color: ${({ theme }) => theme.colors.black.black_500};
  }

  ${respond_to('900px')} {
    /* order: 15; */

    p {
      order: -1;
      font-size: ${({ theme }) => theme.typography.text.small} !important;
      font-weight: 500;
      width: 100%;
    }

    .testimonial_img_wrapper {
      order: -2;
    }

    .customer_name {
      order: -3;
      /* margin-block: 1.2rem; */
    }

    .customer_occupation {
      order: -4;
    }
  }
`;

function TestimonialsSwiper() {
  const testimonial_elements = testimonials.map((testimonial) => {
    const { id, image, testimony, name } = testimonial;
    return (
      <SwiperSlide key={id} className="custom_slide">
        {/* <div key={id}> */}
        <TestimonialContent className="testimonial_content">
          <TestimonialImgWrapper className="testimonial_img_wrapper">
            <img
              src={image}
              className="testimonial_img"
              alt={`${name}'s testimony`}
            />
          </TestimonialImgWrapper>
          <TestimonialInfo className="flex_items flex_column">
            {/* <FaQuoteLeft /> */}
            <p>
              <span>
                <FaQuoteLeft />{' '}
              </span>{' '}
              {testimony}
            </p>
            <span className="customer_name">{name}</span>
            <span className="customer_occupation">customer</span>
          </TestimonialInfo>
        </TestimonialContent>
        {/* </div> */}
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 10000000000000 }}
      navigation
      pagination={{ clickable: true }}
      loop
      style={{ overflow: 'visible' }}
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={100}
    >
      {/* <div> */}
      {testimonial_elements}
      {/* </div> */}
    </Swiper>
  );
}

export default TestimonialsSwiper;
