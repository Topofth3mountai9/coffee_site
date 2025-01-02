import React from 'react';
import OurContainer from './OurContainer.component';
import { stats_info } from '../data';
import styled from 'styled-components';
import AnimatedNumber from '../ui/AnimatedNumber';
import { respond_to } from '../helpers/breakpoints';

const StatsContainer = styled.section`
  width: 100%;
  height: 50vh;
  background: url('/stats/image7.jpg') no-repeat center center/cover;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  ${respond_to('900px')} {
    height: 40vh;
  }
`;

const StatsContent = styled.div`
  width: 100%;
  display: flex;
  /* max-width: 80%;
  margin-inline: auto; */
  text-align: center;
  /* gap: 8.4rem; */
  justify-content: space-around;
  /* justify-content: space-evenly; */
`;

const StatContainer = styled.div`
  /* height: 25rem; */
  /* width: 30rem; */
  justify-content: space-evenly;
  .stat_footer {
    color: ${({ theme }) => theme.colors.grey.c};
  }
`;

const StyledIcon = styled.div`
  height: 7rem;
  width: 7rem;
  background: transparent;
  border: 0.2rem solid ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    transform: rotateZ(134.2deg);
    background: ${({ theme }) => theme.colors.primary};

    svg {
      transform: rotateZ(-134.2deg);
      stroke: 0.2rem ${({ theme }) => theme.colors.black.black_500};
      fill: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.black.black_500};
    }
  }
`;

function Stats() {
  let stat_elements = stats_info.map((stat) => {
    const { id, icon, number, stat_footer } = stat;
    return (
      <StatContainer
        key={id}
        className="flex_items flex_column align_middle align_horizontal g_"
      >
        <StyledIcon>{icon}</StyledIcon>
        {/* <span className="stat_number text_medium text_primary">{number}</span> */}
        <AnimatedNumber
          end={number}
          className="stat_number text_medium text_primary"
        />
        <span className="stat_footer text_tiny">{stat_footer}</span>
      </StatContainer>
    );
  });
  return (
    <StatsContainer className="flex_items align_middle align_horizontal">
      <OurContainer other_class="container">
        <StatsContent className="flex_items g_">{stat_elements}</StatsContent>
      </OurContainer>
    </StatsContainer>
  );
}

export default Stats;
