import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import img from '../images/self.jpg'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem 0;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 350px;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

const HeroContent = styled.div`
  animation: fadeInUp 0.8s ease;
`;

const HeroTitle = styled.h1`
  font-family: 'Source Code Pro', monospace;
  font-size: 3.5rem;
  font-weight: 700;
  color: #f7fafc;
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #63b3ed;
  margin-bottom: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroDivider = styled.div`
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #63b3ed, #805ad5);
  margin-bottom: 2rem;
  border-radius: 2px;

  @media (max-width: 768px) {
    margin: 0 auto 2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: #a0aec0;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 auto 2rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(Link)`
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  &.primary {
    background: linear-gradient(135deg, #63b3ed, #805ad5);
    color: white;
    box-shadow: 0 4px 15px rgba(99, 179, 237, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(99, 179, 237, 0.4);
    }
  }

  &.secondary {
    background: transparent;
    color: #63b3ed;
    border: 2px solid #63b3ed;

    &:hover {
      background: rgba(99, 179, 237, 0.1);
      transform: translateY(-2px);
    }
  }

  &.tertiary {
    background: rgba(255, 255, 255, 0.1);
    color: #f7fafc;
    border: 2px solid transparent;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    width: 200px;
    justify-content: center;
  }
`;

const HeroSidebar = styled.div`
  @media (max-width: 768px) {
    order: -1;
  }
`;

const ProfileCard = styled.div`
  background: rgba(45, 55, 72, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(99, 179, 237, 0.2);
  animation: fadeInUp 0.8s ease 0.2s both;

  @media (max-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ProfileAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  object-fit: cover;
  border: 3px solid rgba(99, 179, 237, 0.3);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(99, 179, 237, 0.6);
    transform: scale(1.05);
  }
`;

const ProfileName = styled.h3`
  color: #f7fafc;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ProfileTitle = styled.p`
  color: #a0aec0;
  font-size: 0.9rem;
`;

const ProfileStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: rgba(99, 179, 237, 0.1);
  border-radius: 0.5rem;
  border-left: 3px solid #63b3ed;
`;

const StatLabel = styled.span`
  color: #a0aec0;
  font-size: 0.9rem;
`;

const StatValue = styled.span`
  color: #f7fafc;
  font-weight: 600;
`;

const ProfileLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ProfileLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: #a0aec0;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: rgba(99, 179, 237, 0.2);
    color: #63b3ed;
    transform: translateY(-2px);
  }

  i {
    font-size: 1rem;
  }
`;

const Home = () => {
  const fullText = 'Neel Venugopal';
  const [displayText, setDisplayText] = useState(fullText);

  // useEffect(() => {
  //   let i = 0;
  //   const typeWriter = () => {
  //     if (i < fullText.length) {
  //       setDisplayText(prev => prev + fullText.charAt(i));
  //       i++;
  //       setTimeout(typeWriter, 80);
  //     }
  //   };
    
  //   // Start typing effect after a short delay
  //   const timer = setTimeout(typeWriter, 500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          {/* <HeroTitle>{displayText}</HeroTitle> */}
          <HeroSubtitle>Driving disruptive innovations that have an impact on millions of people </HeroSubtitle>
          <HeroDivider />
          <HeroDescription>
            As a software engineer, I excel at collaborating closely with engineers and product managers to understand complex problems and translate them into simple and impactful solutions to improve customer outcomes. 
          </HeroDescription>
          <HeroDescription>
            I have a relentless drive for results and for meeting personal and team commitments. I am good at prioritizing among competing demands and keeping focus on what is important, while still being able to balance less urgent projects.
          </HeroDescription>
          <HeroDescription>
            With a passion for learning, curiosity and the ability to go deep on any subject, I am confident that I can adapt to new technologies and situations. I enjoy helping and mentoring people to grow and strengthen teams.
          </HeroDescription>
          <HeroDescription>
            I believe the work I do should drive positive change for people everywhere, and I am always striving to become better.
          </HeroDescription>
          <HeroButtons>
            <Button to="/experience" className="primary">Experience</Button>
            <Button to="/projects" className="secondary">Projects</Button>
            <Button to="/contact" className="tertiary">Contact</Button>
          </HeroButtons>
        </HeroContent>

        <HeroSidebar>
          <ProfileCard>
            <ProfileHeader>
              <ProfileAvatar src={img} alt="Neel Venugopal" />
              <ProfileName>Neel Venugopal</ProfileName>
              <ProfileTitle>Senior Software Engineer at Hive.Ai</ProfileTitle>
            </ProfileHeader>
            
            <ProfileStats>
              <StatItem>
                <StatLabel>Location</StatLabel>
                <StatValue>San Francisco, CA</StatValue>
              </StatItem>
            </ProfileStats>

            <ProfileLinks>
              <ProfileLink href="https://github.com/Snoyark" target="_blank">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </ProfileLink>
              <ProfileLink href="https://linkedin.com/in/neel-venugopal" target="_blank">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </ProfileLink>
            </ProfileLinks>
          </ProfileCard>
        </HeroSidebar>
      </HeroContainer>
    </HeroSection>
  );
};

export default Home;