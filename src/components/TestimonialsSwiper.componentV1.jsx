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

const TestimonialContent = styled.div`
  border-radius: 1rem;
  padding-left: 7rem;
  position: relative;
  overflow: visible;

  justify-content: space-between;
  gap: 4.5rem;

  .testimonial_img {
    width: 217.6px;
    height: 217.6px;
    /* height: 100%; */
    object-fit: cover;
    transform: scale(1.2);
    position: absolute; //Position it relative to the parent
    /* top: -20%; //Adjust to center or position correctly */
    left: -8%; // Adjust as needed
    z-index: 1; // Bring it on top of other elements
  }
`;

const TestimonialImgWrapper = styled.div`
  /* width: 30rem; */
  /* width: 25rem;
  height: 25rem; */
  height: 217.6px;
  width: 217.6px;
  transform: scale(1.2);
`;

const TestimonialInfo = styled.div`
  p {
    color: ${({ theme }) => theme.colors.grey[0]};
  }
`;

function TestimonialsSwiper() {
  const testimonial_elements = testimonials.map((testimonial) => {
    const { id, image, testimony, name } = testimonial;
    return (
      <SwiperSlide key={id}>
        <TestimonialContent className="testimonial_content bg_primary flex_items padding_all_around_2">
          {/* <i className="fas fa-chevron-left"></i> */}
          <img src={image} className="testimonial_img" alt="first customer" />
          {/* <TestimonialImgWrapper className="testimonial_img_wrapper">
          </TestimonialImgWrapper> */}
          <TestimonialInfo className="testimonial_info">
            <p>{testimony}</p>
            <p className="customer_name">{name}</p>
            {/* <p className="customer_occupation">
                Senior Product Mangager at DEP Comercial
              </p> */}
          </TestimonialInfo>
          {/* <i className="fas fa-chevron-right"></i>  */}
        </TestimonialContent>
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
      //   style={{ overflow: 'visible' }}
    >
      {testimonial_elements}
    </Swiper>
  );
}

export default TestimonialsSwiper;
