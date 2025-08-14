import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(26, 32, 44, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  border-bottom: 1px solid #2d3748;
  transition: all 0.3s ease;

  &.scrolled {
    background: rgba(26, 32, 44, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled(Link)`
  font-family: 'Source Code Pro', monospace;
  font-size: 1.5rem;
  font-weight: 600;
  color: #63b3ed;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #90cdf4;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: ${props => props.isOpen ? '0' : '-100%'};
    width: 100%;
    height: calc(100vh - 80px);
    background: rgba(26, 32, 44, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 2rem;
    transition: left 0.3s ease;
    gap: 1rem;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: #a0aec0;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #63b3ed;
    background: rgba(99, 179, 237, 0.1);
  }

  &.active {
    color: #63b3ed;
    background: rgba(99, 179, 237, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem 2rem;
    width: 100%;
    text-align: center;
    border-radius: 0;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 30px;
    height: 3px;
    background: #a0aec0;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
      transform: ${props => props.isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <NavbarContainer className={scrolled ? 'scrolled' : ''}>
      <NavContent>
        <Logo to="/">Neel Venugopal</Logo>
        
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink to="/" className={isActive('/') ? 'active' : ''}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/experience" className={isActive('/experience') ? 'active' : ''}>
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects" className={isActive('/projects') ? 'active' : ''}>
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" className={isActive('/contact') ? 'active' : ''}>
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>

        <HamburgerButton isOpen={isOpen} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </HamburgerButton>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;