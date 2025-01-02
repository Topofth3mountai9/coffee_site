import React from 'react';
import styled, { css } from 'styled-components';
import { useNavContext } from '../context/NavContext';

const Bar = styled.div`
  height: 0.3rem;
  width: 3rem;
  background: ${({ theme }) => theme.colors.grey.light};
  transition: transform 0.3s;
`;

const HamburgerContainer = styled.div`
  gap: 0.8rem;
  margin-left: auto;
  ${({ is_nav_open }) =>
    is_nav_open &&
    `
     .line_1 {
        transform: rotateZ(45deg) translate(0.7rem, -0.1rem);
      }
      .line_2 {
        transform: rotateZ(-45deg) translate(0.7rem, -0.1rem);
      }
  `}
`;

function Hamburger({ is_nav_open }) {
  // const { is_nav_open } = useNavContext();
  console.log(is_nav_open);
  return (
    <HamburgerContainer
      className="flex_items flex_column align_middle"
      is_nav_open={is_nav_open}
    >
      <Bar className="line_1" />
      <Bar className="line_2" />
    </HamburgerContainer>
  );
}

export default Hamburger;
