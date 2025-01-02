import React from 'react';
import OurContainer from './OurContainer.component';
import { main_feature_box_data } from '../data';
import styled from 'styled-components';
import { respond_to } from '../helpers/breakpoints';

const MainFeatureBoxContainer = styled.section`
  /* height: 60vh; */
  /* height: 70vh; */
  padding: 4rem;
  width: 100%;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
  }
`;

const StyledIcon = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.colors.black.black_500};
  /* padding-block: 2rem;
  padding-inline: 1.5rem; */
  display: flex;
  align-items: center;
  justify-content: center;

  width: 9rem;
  height: 10rem;
  svg {
    /* color: transparent; */
    /* fill: transparent; */
    /* -webkit-text-stroke: 0.2rem ${({ theme }) =>
      theme.colors.black.black_500}; */
    /* stroke-width: 4rem; */
    /* stroke: ${({ theme }) => theme.colors.black.black_500};
    stroke-width: 1; */
    /* font-size: 4rem; */
    width: 4rem;
    height: 4rem;
    /* font-weight: 900; */
  }
`;

const MainFeatureBoxContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  /* max-width: 70%; */
  margin-inline: auto;
  text-align: center;

  ${respond_to('1100px')} {
    width: 95%;
  }

  ${respond_to('900px')} {
    flex-flow: column wrap;
    gap: 6.4rem;
  }
`;
const FeatureBoxContainer = styled.div`
  width: 30rem;
  /* height: 35rem; */

  .title {
    margin-block: 2.8rem 3rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }

  ${respond_to('900px')} {
    width: 60rem;
    width: 50%;
    margin-inline: auto;
  }
`;

function MainFeatureBox() {
  const main_feature_box_elements = main_feature_box_data.map((feature) => {
    const { id, icon, title, paragraph } = feature;
    return (
      <FeatureBoxContainer
        key={id}
        className="flex_items flex_column align_middle"
      >
        <StyledIcon>{icon}</StyledIcon>
        <h5 className="title">{title}</h5>
        <p className="text_xs">{paragraph}</p>
      </FeatureBoxContainer>
    );
  });
  return (
    <MainFeatureBoxContainer className="bg_primary flex_items align_middle align_horizontal">
      <OurContainer other_class="container">
        <MainFeatureBoxContent className="flex_items g_">
          {main_feature_box_elements}
        </MainFeatureBoxContent>
      </OurContainer>
    </MainFeatureBoxContainer>
  );
}

export default MainFeatureBox;
