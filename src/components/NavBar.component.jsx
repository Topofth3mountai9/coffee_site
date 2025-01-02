import React from 'react';
import OurContainer from './OurContainer.component';
import styled from 'styled-components';
import Navbar from '../ui/nav_bar';
import { FaMugSaucer } from 'react-icons/fa6';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { nav_links } from '../data';
import { respond_to } from '../helpers/breakpoints';

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 10rem;
  /* background: ${({ theme }) => theme.colors.black.dark}; */
  width: 100%;
  z-index: 500; //to ensure the navbar is always above the swiper
`;

const LogoText = styled.div`
  align-self: center;
  margin-left: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1rem;
  .first {
    /* line-height: 0.8; */
  }

  .second {
    margin-top: -1.2rem;
  }
`;

let StyledLink = styled.a`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.text.xs};

  ${respond_to('768px')} {
    font-size: ${({ theme }) => theme.typography.text.large};
  }
  /* &:hover {
    color: ${({ theme }) => theme.colors.primary};
  } */
`;

const StyledLogoIcon = styled(FaMugSaucer)`
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.grey[0]};
  stroke-width: 2rem;
  height: 4rem;
  width: 4rem;

  /* svg {
    color: transparent;
    stroke: ${({ theme }) => theme.colors.grey[0]};
  } */
`;

const StyledIcon = styled.div`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.colors.grey[0]};
  &::after {
    content: '1';
    height: 3rem;
    width: 3rem;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.black.black_500};
    font-size: ${({ theme }) => theme.typography.text.xs};
    border-radius: 50%;
    position: absolute;
    top: -1.6rem;
    right: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledList = styled.li`
  &:hover {
    .nav_link {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  ${respond_to('768px')} {
  }
`;

function NavBar() {
  const navbar_link_elements = nav_links.map((link) => {
    const { id, label, url, icon } = link;
    return (
      <StyledList key={id}>
        <StyledLink href={url} className="nav_link ">
          {(label && label) || <StyledIcon>{icon}</StyledIcon>}
          {/* {label || icon} */}
        </StyledLink>
      </StyledList>
    );
  });
  return (
    <NavBarContainer>
      <Navbar>
        <Navbar.Logo>
          <StyledLogoIcon icon_color="transparent">
            <FaMugSaucer className="logo_svg" />
          </StyledLogoIcon>
          <LogoText className="logo_text flex_items flex_column">
            <span className="first text_tiny">coffee</span>
            <span className="second text_xxs">house</span>
          </LogoText>
        </Navbar.Logo>
        <Navbar.Links>{navbar_link_elements}</Navbar.Links>
        <Navbar.HamburgerButton />
        <Navbar.MobileMenu>{navbar_link_elements}</Navbar.MobileMenu>
      </Navbar>
      {/* <StyledIcon className="position_relative">
        <HiOutlineShoppingCart />
      </StyledIcon> */}
    </NavBarContainer>
  );
}

export default NavBar;
