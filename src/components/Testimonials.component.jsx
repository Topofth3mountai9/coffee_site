import React from 'react';
import OurContainer from './OurContainer.component';
import Section_header from './Section_header.component';
import TestimonialsSwiper from './TestimonialsSwiper.component';
import styled from 'styled-components';
import { respond_to } from '../helpers/breakpoints';

const TestimonialsContainer = styled.section`
  width: 100%;
  height: 80vh;
  /* margin-bottom: 4rem; */

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${respond_to('900px')} {
    height: 50vh;
  }
`;

const TestimonialsContent = styled.div`
  max-width: 70%;
  margin-inline: auto;

  text-align: center;
  .paragraph {
    margin-block: 3rem 10rem;
  }
`;

function Testimonials() {
  return (
    <TestimonialsContainer>
      <OurContainer other_class="container">
        <TestimonialsContent>
          <Section_header h3="testimony" h2="customers say" />
          <p className="paragraph text_xs ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            doloribus qui nemo earum perspiciatis fugiat quae a numquam
            quibusdam asperiores.
          </p>
          <TestimonialsSwiper />
        </TestimonialsContent>
      </OurContainer>
    </TestimonialsContainer>
  );
}

export default Testimonials;
