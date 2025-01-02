import React from 'react';
import styled from 'styled-components';

const SectionHeaderContainer = styled.div`
  font-size: ${({ theme }) => theme.typography.heading.one};
  margin-block-end: 2.5rem;

  h3 {
    text-transform: capitalize;
    font-family: ${({ theme }) => theme.typography.fonts.secondary};
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: 300;
    margin-block-start: -2rem;
  }
`;

function Section_header({ h3, h2 }) {
  return (
    <SectionHeaderContainer>
      <h3 className="heading_1 text_primary">{h3}</h3>
      <h2 className="heading_1">{h2}</h2>
    </SectionHeaderContainer>
  );
}

export default Section_header;
