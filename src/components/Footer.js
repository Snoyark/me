import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(26, 32, 44, 0.95);
  border-top: 1px solid #2d3748;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterText = styled.p`
  color: #a0aec0;
  font-size: 0.9rem;

  span {
    color: #ff6b6b;
    margin: 0 0.25rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          &copy; 2024 Neel Venugopal. Built with<span>❤️</span>for GitHub Pages.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;