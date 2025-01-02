import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger.component';
import OurContainer from '../components/OurContainer.component';

const NavbarContext = createContext();

const Nav_bar_container = styled.div`
  position: relative;
`;
const Nav_bar_content = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.unknown_colors.body_bg};
  position: relative;
`;

const LogoContainer = styled.div`
  /* font-size: 1.5rem; */
  font-size: 1.5rem;
  font-weight: bold;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.unknown_colors.body_bg};
    color: ${({ theme }) => theme.colors.grey[100]};
    transition: transform 0.3s ease-in-out;
    transform: ${({ is_nav_open }) =>
      isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    z-index: 10;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ children, className = '' }) => {
  const [is_nav_open, set_is_nav_open] = useState(false);

  const toggleMenu = () => set_is_nav_open((prev) => !prev);

  return (
    <NavbarContext.Provider value={{ is_nav_open, toggleMenu }}>
      <section id="top_nav">
        <OurContainer>
          <Nav_bar_container className="nav_bar_container">
            <Nav_bar_content className="nav_bar">{children}</Nav_bar_content>
          </Nav_bar_container>
        </OurContainer>
      </section>
      {/* <NavContainer className={className}>{children}</NavContainer> */}
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
  const { is_nav_open } = useContext(NavbarContext);
  return (
    <MobileMenuContainer is_nav_open={is_nav_open}>
      {children}
    </MobileMenuContainer>
  );
};

Navbar.HamburgerButton = () => {
  const { toggleMenu, is_nav_open } = useContext(NavbarContext);
  return (
    <HamburgerButton onClick={toggleMenu} className="item_end">
      <Hamburger is_nav_open={is_nav_open} />
    </HamburgerButton>
  );
};

export default Navbar;
