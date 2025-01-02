import React from 'react';
import OurContainer from './OurContainer.component';
import styled from 'styled-components';
import ContactForm from './ContactForm.component';
import { respond_to } from '../helpers/breakpoints';

const ContactContainer = styled.section`
  width: 100%;
  height: 70vh;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${respond_to('900px')} {
    /* height: 0vh; */
  }
`;

const ContactContent = styled.div`
  grid-template-columns: 1.1fr 1fr;

  .contact_bg_img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${respond_to('1100px')} {
    grid-template-columns: 1fr;
    .contact_bg_img {
      display: none;
    }
  }
`;

const ContactBgImageWrapper = styled.div``;

function Contact() {
  return (
    <ContactContainer className="flex_items align_middle align_horizontal">
      <OurContainer other_class="container">
        <ContactContent className="grid g_2 ">
          {/* <ContactBgImageWrapper> */}
          <img
            src="/contact/image1.jpg"
            alt="contact image"
            className="contact_bg_img"
          />
          <ContactForm />
          {/* </ContactBgImageWrapper> */}
        </ContactContent>
      </OurContainer>
    </ContactContainer>
  );
}

export default Contact;
