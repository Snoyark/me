import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 4rem 0;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, #63b3ed, #805ad5);

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:nth-child(odd) {
    text-align: right;

    .timeline-content {
      margin-right: 60px;

      @media (max-width: 768px) {
        margin-right: 0;
        margin-left: 80px;
        text-align: left;
      }
    }
  }

  &:nth-child(even) {
    text-align: left;

    .timeline-content {
      margin-left: 60px;

      @media (max-width: 768px) {
        margin-left: 80px;
      }
    }
  }
`;

const TimelineMarker = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #63b3ed, #805ad5);
  border-radius: 50%;
  border: 4px solid #1a202c;
  z-index: 1;

  @media (max-width: 768px) {
    left: 30px;
  }
`;

const TimelineContent = styled.div`
  background: rgba(45, 55, 72, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(99, 179, 237, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(99, 179, 237, 0.2);
    border-color: rgba(99, 179, 237, 0.4);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TimelineTitle = styled.h3`
  color: #f7fafc;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const TimelineCompany = styled.h4`
  color: #63b3ed;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const TimelinePeriod = styled.p`
  color: #805ad5;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TimelineDescription = styled.p`
  color: #a0aec0;
  line-height: 1.8;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const TimelineSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: ${props => props.align || 'flex-start'};

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const SkillTag = styled.span`
  background: rgba(99, 179, 237, 0.2);
  color: #63b3ed;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(99, 179, 237, 0.3);
`;

const SectionTitle = styled.h2`
  font-family: 'Source Code Pro', monospace;
  font-size: 2rem;
  color: #f7fafc;
  text-align: center;
  margin: 4rem 0 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 3rem 0 1.5rem;
  }
`;

const Achievements = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Achievement = styled.div`
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

const AchievementIcon = styled.div`
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

const AchievementContent = styled.div`
  flex: 1;
`;

const AchievementTitle = styled.h4`
  color: #f7fafc;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const AchievementDescription = styled.p`
  color: #a0aec0;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const ActionSection = styled.div`
  text-align: center;
  margin-top: 3rem;
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 179, 237, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const Experience = () => {
  const timelineRef = useRef(null);
  const achievementsRef = useRef(null);

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

    // Observe timeline items
    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      timelineItems.forEach(item => observer.observe(item));
    }

    // Observe achievements
    if (achievementsRef.current) {
      const achievementItems = achievementsRef.current.querySelectorAll('.achievement');
      achievementItems.forEach(item => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ExperienceSection>
      <Container>
        <PageTitle>Professional Experience</PageTitle>

        <Timeline ref={timelineRef}>
          <TimelineItem className="timeline-item">
            <TimelineMarker />
            <TimelineContent className="timeline-content">
              <TimelineTitle>Senior Software Engineer</TimelineTitle>
              <TimelineCompany>Hive.ai</TimelineCompany>
              <TimelinePeriod>Present</TimelinePeriod>
              <TimelineDescription>
                Designed and implemented the integration between Safer's Thorn and Hive, enabling customers to flag CSAM material at scale
              </TimelineDescription>
              <TimelineDescription>
                Designed and led Hive’s first multi-region datacenter expansion, extending operations into the East Coast and Europe
              </TimelineDescription>
              <TimelineDescription>
                Built a unified configuration system to serve as a single source of truth, enhancing code clarity and ensuring consistency between microservices
              </TimelineDescription>
              <TimelineDescription>
                Led the effort to increase the safety, speed, and frequency of code deployments by implementing test and deployment automation, resulting in 100% uptime in Q1 2024 for the first time
              </TimelineDescription>
              <TimelineSkills align="flex-end">
                <SkillTag>AI/ML</SkillTag>
                <SkillTag>Rust/Node.js</SkillTag>
                <SkillTag>PostgreSQL/Scylla</SkillTag>
                <SkillTag>System Design</SkillTag>
              </TimelineSkills>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className="timeline-item">
            <TimelineMarker />
            <TimelineContent className="timeline-content">
              <TimelineTitle>Software Engineer II</TimelineTitle>
              <TimelineCompany>AWS - Seattle, WA</TimelineCompany>
              <AchievementDescription>AWS is the world's most comprehensive and broadly adopted cloud platform.</AchievementDescription>
              <TimelinePeriod>August 2020 - November 2022</TimelinePeriod>
              <TimelineDescription>
                At Amazon SageMaker, built data ingestion subsystem for new feature at Sagemaker Experiments.
              </TimelineDescription>
              <TimelineDescription>
                At Amazon Connect, implemented ways to reduce development time for exposing new customer insights and improved customer insights metrics.
              </TimelineDescription>
              <TimelineSkills align="flex-start">
                <SkillTag>AWS Stack</SkillTag>
                <SkillTag>Java/Ruby/YAML</SkillTag>
                <SkillTag>Machine Learning</SkillTag>
              </TimelineSkills>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className="timeline-item">
            <TimelineMarker />
            <TimelineContent className="timeline-content">
              <TimelineTitle>Engineering Intern</TimelineTitle>
              <TimelineCompany>Tanium - Emeryville, CA</TimelineCompany>
              <AchievementDescription>Tanium is the proven platform for Device Visibility and Management.</AchievementDescription>
              <TimelinePeriod>May - August 2019</TimelinePeriod>
              <TimelineDescription>
                Built shared UI components in Node/React as part of the company's component library.
              </TimelineDescription>
              <TimelineDescription>
                Created a live-edit system with shareable links for internal UI components.
              </TimelineDescription>
              <TimelineSkills align="flex-start">
                <SkillTag>React</SkillTag>
                <SkillTag>Node.js</SkillTag>
                <SkillTag>Component Library</SkillTag>
                <SkillTag>UI Development</SkillTag>
              </TimelineSkills>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className="timeline-item">
            <TimelineMarker />
            <TimelineContent className="timeline-content">
              <TimelineTitle>Engineering Intern</TimelineTitle>
              <TimelineCompany>data.world - Austin, TX</TimelineCompany>
              <AchievementDescription>data.world is the platform for modern data teamwork.</AchievementDescription>
              <TimelinePeriod>May - August 2018</TimelinePeriod>
              <TimelineDescription>
                Built Ontologies for geopolitical entities (Cities, Counties, States, Countries, Landmasses) 
                using SPARQL, a semantic query language for databases, and developed test automation 
                using Bash/JavaScript.
              </TimelineDescription>
              <TimelineSkills align="flex-end">
                <SkillTag>SPARQL</SkillTag>
                <SkillTag>Ontologies</SkillTag>
                <SkillTag>JavaScript</SkillTag>
                <SkillTag>Bash</SkillTag>
                <SkillTag>Test Automation</SkillTag>
              </TimelineSkills>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className="timeline-item">
            <TimelineMarker />
            <TimelineContent className="timeline-content">
              <TimelineTitle>Research Affiliate</TimelineTitle>
              <TimelineCompany>Lawrence Berkeley National Labs</TimelineCompany>
              <TimelinePeriod>September 2016 - April 2018</TimelinePeriod>
              <TimelineDescription>
                Used a Magneto-Optical Kerr Effect Microscope with Python to control, capture and 
                analyze data to measure the uniformity of a magnetic field.
              </TimelineDescription>
              <TimelineSkills align="flex-start">
                <SkillTag>Python</SkillTag>
                <SkillTag>Data Analysis</SkillTag>
                <SkillTag>Scientific Research</SkillTag>
                <SkillTag>Laboratory Equipment</SkillTag>
                <SkillTag>Microscopy</SkillTag>
              </TimelineSkills>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <ActionSection>
          <ActionButton to="/projects">View My Projects</ActionButton>
        </ActionSection>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;