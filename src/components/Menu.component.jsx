import React from 'react';
import OurContainer from './OurContainer.component';
import styled from 'styled-components';
import Button from '../ui/button.component';
import { right_menu_imgs } from '../data';
import Section_header from './Section_header.component';
import { respond_to } from '../helpers/breakpoints';

const MenuContainer = styled.section`
  width: 100%;
  height: 70vh;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${respond_to('900px')} {
    height: 40vh;
  }
`;

const MenuContent = styled.div`
  grid-template-columns: 0.9fr 1fr;
  /* max-width: 90%; */
  margin-inline: auto;
  height: 100%;

  ${respond_to('600px')} {
    grid-template-columns: 1fr;
  }
`;

const MenuLeft = styled.div`
  text-align: end;
  .paragraph {
    color: ${({ theme }) => theme.colors.grey.great};
    margin-block-end: 3rem;
    /* width: 70%; */
    /* text-align: end; */
    padding-inline-start: 7rem;
  }

  button {
    align-self: end;
  }

  ${respond_to('600px')} {
    width: 100%;
    text-align: center;

    button {
      align-self: center;
    }
    .paragraph {
      padding-inline-start: 0;
      max-width: 60%;
      margin-inline: auto;
      /* width: 70%; */
    }
  }
`;
const MenuRight = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  ${respond_to('600px')} {
    display: none !important;
  }
`;

const ImageWrapper = styled.div`
  height: 25rem;
  width: 25rem;
  overflow: hidden;

  img {
    transition: all 0.3s ease-in-out;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  &:hover {
    img {
      transform: scale(1.3);
      transform-origin: 50% 50%;
    }
  }

  ${respond_to('1100px')} {
    height: 16rem;
    width: 16rem;
  }
`;

function Menu() {
  const right_menu_img_elements = right_menu_imgs.map((img, index) => {
    const { id, image } = img;
    return (
      <ImageWrapper key={id}>
        <img src={image} alt={`menu image ${index + 1}`} className="menu_img" />
      </ImageWrapper>
    );
  });
  return (
    <MenuContainer className="bg_dark flex_items align_middle align_horizontal">
      <OurContainer other_class="container">
        <MenuContent className="grid g_6 align_middle align_horizontal">
          <MenuLeft className="flex_items flex_column">
            <Section_header h3="Discover" h2="our menu" />
            <p className="paragraph text_xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              accusantium vitae fugiat perferendis. Inventore rem debitis
              consequatur dolorum voluptatum. Repudiandae?{' '}
            </p>
            <Button
              type="transparent_dark"
              size="big"
              square={true}
              text="uppercase"
            >
              view full menu
            </Button>
          </MenuLeft>
          <MenuRight className="gri grid_2_col g_2">
            {right_menu_img_elements}
          </MenuRight>
        </MenuContent>
      </OurContainer>
    </MenuContainer>
  );
}

export default Menu;
