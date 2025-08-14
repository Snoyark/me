import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const PageTitle = styled.h1`
  font-family: 'Source Code Pro', monospace;
  font-size: 3rem;
  color: #f7fafc;
  text-align: center;
  margin-bottom: 1rem;
  animation: fadeInUp 0.8s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.1rem;
  color: #a0aec0;
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeInUp 0.8s ease 0.2s both;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactItem = styled.div`
  background: rgba(45, 55, 72, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(99, 179, 237, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  opacity: 0;
  transform: translateY(30px);

  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: fadeInUp 0.6s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(99, 179, 237, 0.2);
    border-color: rgba(99, 179, 237, 0.4);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #63b3ed, #805ad5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  i {
    color: white;
    font-size: 1.25rem;
  }
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactTitle = styled.h4`
  color: #f7fafc;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  color: #a0aec0;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ContactLink = styled.a`
  color: #63b3ed;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #90cdf4;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #63b3ed, #805ad5);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const MessageSection = styled.div`
  background: rgba(45, 55, 72, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(99, 179, 237, 0.2);
  text-align: center;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(30px);

  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: fadeInUp 0.6s ease 0.4s both;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const MessageText = styled.p`
  color: #a0aec0;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ActionSection = styled.div`
  text-align: center;
  opacity: 0;
  transform: translateY(30px);

  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: fadeInUp 0.6s ease 0.6s both;
  }
`;

const ActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #63b3ed, #805ad5);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 179, 237, 0.3);
  font-size: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 179, 237, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const Contact = () => {
  const contactRef = useRef(null);
  const messageRef = useRef(null);
  const actionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe contact items
    if (contactRef.current) {
      const contactItems = contactRef.current.querySelectorAll('.contact-item');
      contactItems.forEach(item => observer.observe(item));
    }

    // Observe message section
    if (messageRef.current) {
      observer.observe(messageRef.current);
    }

    // Observe action section
    if (actionRef.current) {
      observer.observe(actionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ContactSection>
      <Container>
        <PageTitle>Let's Connect</PageTitle>
        <PageSubtitle>
          I'm always interested in new opportunities and collaborations
        </PageSubtitle>

        <ContactInfo ref={contactRef}>
          <ContactItem className="contact-item">
            <ContactIcon>
              <i className="fas fa-map-marker-alt"></i>
            </ContactIcon>
            <ContactDetails>
              <ContactTitle>Location</ContactTitle>
              <ContactText>San Francisco, CA</ContactText>
            </ContactDetails>
          </ContactItem>

          <ContactItem className="contact-item">
            <ContactIcon>
              <i className="fas fa-envelope"></i>
            </ContactIcon>
            <ContactDetails>
              <ContactTitle>Email</ContactTitle>
              <ContactText>
                <ContactLink href="mailto:neelv7@berkeley.edu">
                  neelv7@berkeley.edu
                </ContactLink>
              </ContactText>
            </ContactDetails>
          </ContactItem>

          <ContactItem className="contact-item">
            <ContactIcon>
              <i className="fab fa-github"></i>
            </ContactIcon>
            <ContactDetails>
              <ContactTitle>GitHub</ContactTitle>
              <ContactText>
                <ContactLink href="https://github.com/Snoyark" target="_blank">
                  @Snoyark
                </ContactLink>
              </ContactText>
            </ContactDetails>
          </ContactItem>

          <ContactItem className="contact-item">
            <ContactIcon>
              <i className="fab fa-linkedin"></i>
            </ContactIcon>
            <ContactDetails>
              <ContactTitle>LinkedIn</ContactTitle>
              <ContactText>
                <ContactLink href="https://linkedin.com/in/neel-venugopal" target="_blank">
                  neel-venugopal
                </ContactLink>
              </ContactText>
            </ContactDetails>
          </ContactItem>
        </ContactInfo>

        <MessageSection ref={messageRef}>
          <MessageText>
            Feel free to reach out through any of the platforms above. 
            I'm always open to discussing new opportunities, collaborations, or just connecting with fellow developers.
          </MessageText>
        </MessageSection>

        <ActionSection ref={actionRef}>
          <ActionButton to="/">Back to Home</ActionButton>
        </ActionSection>
      </Container>
    </ContactSection>
  );
};

export default Contact;