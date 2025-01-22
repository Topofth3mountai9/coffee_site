import React from 'react';
import OurContainer from './OurContainer.component';
import Hero from './Hero.component';
import styled from 'styled-components';
import { respond_to } from '../helpers/breakpoints';
import { background_hero_imgs } from '../data';
import Button from '../ui/button.component';

const Nav_and_hero_container = styled.div`
  width: 100%;
  height: 100vh;

  ${respond_to('450px')} {
    height: 60vh;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const SubscribeForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  width: 90%;
  margin-top: 2rem;

  input {
    flex: 1;
    min-width: 0;
    height: 48px;
    border-radius: 4px;
  }

  button {
    height: 48px;
    padding: 0 2rem;
  }
`;

function Nav_and_hero() {
  return (
    <Nav_and_hero_container>
      <OurContainer>
        {/* Example 1: Original Hero with Buttons */}
        <Hero slides={background_hero_imgs}>
          <Hero.Text>
            <Hero.Welcome>Welcome</Hero.Welcome>
            <Hero.Title>Amazing taste & beautiful place</Hero.Title>
            <Hero.Subtitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              quibusdam est autem quas atque ipsum
            </Hero.Subtitle>
            <ButtonsContainer className="flex_items align_middle align_horizontal g_1">
              <Button type="primary" square={true} size="big">
                Order Now
              </Button>
              <Button type="transparent_light" square={true} size="big">
                View Menu
              </Button>
            </ButtonsContainer>
          </Hero.Text>
        </Hero>

        {/* Example 2: Hero with Subscribe Form */}
        {/* Uncomment to see alternative hero usage
        <Hero>
          <Hero.Text marginTop="20rem">
            <Hero.Welcome>Newsletter</Hero.Welcome>
            <Hero.Title>Stay Updated</Hero.Title>
            <Hero.Subtitle>
              Subscribe to our newsletter to receive the latest updates and exclusive offers
            </Hero.Subtitle>
            <Hero.Content>
              <SubscribeForm onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                />
                <Button type="primary" square={true}>
                  Subscribe
                </Button>
              </SubscribeForm>
            </Hero.Content>
          </Hero.Text>
        </Hero>
        */}
      </OurContainer>
    </Nav_and_hero_container>
  );
}

export default Nav_and_hero;
