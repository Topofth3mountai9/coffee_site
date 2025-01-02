import React from 'react';
import styled from 'styled-components';

const StyledIconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.4rem;
  width: 2.4rem;
  color: ${({ theme }) => theme.colors.primary};
  stroke: ${({ theme }) => theme.colors.primary};
`;

function StyledIcon({ children }) {
  return (
    <StyledIconContainer className="flex_items align_middle align_horizontal">
      {children}
    </StyledIconContainer>
  );
}

export default StyledIcon;
