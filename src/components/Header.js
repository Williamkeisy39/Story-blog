import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Nav = styled.nav`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled(Link)`
  color: #374151;
  transition: color 0.3s ease;
  
  &:hover {
    color: #92400e;
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
  ${props => !props.isOpen && `
    display: none;
  `}
`;

const MobileNavLink = styled(Link)`
  font-size: 1.5rem;
  color: #374151;
  transition: color 0.3s ease;
  
  &:hover {
    color: #92400e;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  color: #374151;
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Container>
        <Logo>ECHOES IN AFRICA</Logo>
        
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/stories">Stories</NavLink>
          <NavLink to="/posts">Reflections</NavLink>
          <NavLink to="/categories">Community</NavLink>
          <NavLink to="/explore">Contact</NavLink>
        </Nav>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </MobileMenuButton>
      </Container>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseButton onClick={closeMobileMenu}>&times;</CloseButton>
        <MobileNavLink to="/" onClick={closeMobileMenu}>Home</MobileNavLink>
        <MobileNavLink to="/stories" onClick={closeMobileMenu}>Stories</MobileNavLink>
        <MobileNavLink to="/posts" onClick={closeMobileMenu}>Reflections</MobileNavLink>
        <MobileNavLink to="/categories" onClick={closeMobileMenu}>Community</MobileNavLink>
        <MobileNavLink to="/explore" onClick={closeMobileMenu}>Contact</MobileNavLink>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header; 