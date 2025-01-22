import React from 'react';
import OurContainer from './OurContainer.component';
import styled from 'styled-components';
import { all_information } from '../data';
import StyledIcon from '../ui/StyledIcon';
import { respond_to } from '../helpers/breakpoints';

const InfoContainer = styled.section`
  /* max-width: 80%; */
  /* margin-inline: auto; */
  height: 15vh;
  width: 100%;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const InfoContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  /* gap: 6rem; */
  /* max-width: 70%; */
  margin-inline: auto;

  ${respond_to('600px')} {
    width: 90%;
  }
  ${respond_to('450px')} {
    flex-flow: column wrap;
    width: 100%;
    height: 100%;
    align-items: center;
  }
`;

const BoxInfoContainer = styled.div`
  svg {
  }

  ${respond_to('450px')} {
    width: 100%;
    /* align-items: center; */
    justify-content: center;
  }
`;

const BoxInfo = styled.div`
  .more_info {
    color: ${({ theme }) => theme.colors.grey[0]};
  }
  .paragraph {
    color: ${({ theme }) => theme.colors.grey.a};
    margin-bottom: 0;
    width: 70%;
  }

  ${respond_to('450px')} {
    .paragraph {
      display: none;
    }
  }
`;

function Info() {
  let feature_box_info_elements = all_information.map((info) => {
    const { id, icon, more_info, paragraph } = info;
    return (
      <BoxInfoContainer key={id} className="flex_items align_m g_1">
        <StyledIcon>{icon}</StyledIcon>
        <BoxInfo>
          <span className="more_info text_x text_tiny">{more_info}</span>
          <p className="paragraph text_x text_xs">{paragraph}</p>
        </BoxInfo>
      </BoxInfoContainer>
    );
  });
  return (
    <InfoContainer className="bg_dark padding_all_around_">
      <OurContainer other_class="container">
        <InfoContent className="flex_items g_">
          {feature_box_info_elements}
        </InfoContent>
      </OurContainer>
    </InfoContainer>
  );
}

export default Info;
