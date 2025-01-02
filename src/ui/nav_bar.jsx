import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger.component';
import OurContainer from '../components/OurContainer.component';

const NavbarContext = createContext();

const NavBarContainerHelper = styled.div`
  background: ${({ theme }) => theme.colors.unknown_colors.body_bg};
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Nav_bar_container = styled.div`
  width: 100%;
  height: 10rem;
  position: relative;
`;
const Nav_bar_content = styled.nav`
  width: 80%;
  height: 100%;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.unknown_colors.body_bg};
  position: relative;
`;

const LogoContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 300;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    /* justify-content: center; */
    padding-block-start: 25rem;
    position: fixed;
    top: 0;
    left: 0;
    /* right: 0; */
    height: calc(100vh - 10rem);
    width: 100%;
    background-color: ${({ theme }) => theme.colors.unknown_colors.body_bg};
    color: ${({ theme }) => theme.colors.grey[100]};
    transition: transform 0.3s ease-in-out;
    transform: ${({ is_nav_open }) =>
      is_nav_open ? 'translateY(0)' : 'translateY(-100%)'};
    z-index: 10;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 300;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ children, className = '' }) => {
  const [is_nav_open, set_is_nav_open] = useState(false);

  const toggleMenu = () => set_is_nav_open((prev) => !prev);

  return (
    <NavbarContext.Provider value={{ is_nav_open, toggleMenu }}>
      <NavBarContainerHelper id="top_nav">
        <OurContainer other_class="container">
          <Nav_bar_container className="nav_bar_container">
            <Nav_bar_content className="nav_bar">{children}</Nav_bar_content>
          </Nav_bar_container>
        </OurContainer>
      </NavBarContainerHelper>
    </NavbarContext.Provider>
  );
};

const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error(
      'Navbar sub components must be used within a Navbar component'
    );
  }
  return context;
};

Navbar.Logo = ({ children }) => {
  return (
    <LogoContainer className="flex_items align_middle">
      {children}
    </LogoContainer>
  );
};

Navbar.Links = ({ children }) => {
  return <LinksContainer className="item_end">{children}</LinksContainer>;
};

Navbar.MobileMenu = ({ children }) => {
  const { is_nav_open } = useNavbar();
  return (
    <MobileMenuContainer
      is_nav_open={is_nav_open}
      style={{ height: '100vh' }}
      className="s"
    >
      {children}
    </MobileMenuContainer>
  );
};

Navbar.HamburgerButton = () => {
  const { toggleMenu, is_nav_open } = useNavbar();
  return (
    <HamburgerButton onClick={toggleMenu} className="item_end">
      <Hamburger is_nav_open={is_nav_open} />
    </HamburgerButton>
  );
};

export default Navbar;
