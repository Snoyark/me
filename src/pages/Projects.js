import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useGitHubProjects from '../hooks/useGitHubProjects';
import ProjectCard, { LoadingProjectCard, ErrorProjectCard } from '../components/ProjectCard';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ActionSection = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const GitHubButton = styled.a`
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

  i {
    font-size: 1.1rem;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(45, 55, 72, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(99, 179, 237, 0.2);

  h3 {
    color: #f7fafc;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: 'Source Code Pro', monospace;
  }

  p {
    color: #a0aec0;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const Projects = () => {
  const { projects, loading, error } = useGitHubProjects();
  const gridRef = useRef(null);

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

    if (gridRef.current) {
      const projectCards = gridRef.current.querySelectorAll('.project-card');
      projectCards.forEach(card => observer.observe(card));
    }

    return () => observer.disconnect();
  }, [projects]);

  const renderContent = () => {
    if (loading) {
      return <LoadingProjectCard />;
    }

    if (error) {
      return <ErrorProjectCard />;
    }

    if (projects.length === 0) {
      return (
        <EmptyState>
          <h3>No public repositories found</h3>
          <p>Check back later for updates!</p>
          <GitHubButton href="https://github.com/Snoyark" target="_blank">
            <i className="fab fa-github"></i>
            Visit GitHub Profile
          </GitHubButton>
        </EmptyState>
      );
    }
    const projects_map = projects.map((project, index) => (
      <ProjectCard 
        key={project.id} 
        project={project} 
        className="project-card"
        style={{ animationDelay: `${index * 0.1}s` }}
      />
    ));
    projects_map.push(<ProjectCard
        key={projects_map.length + 1}
        project={{
          name: 'project-bluff',
          language: 'Typescript',
          description: 'An online implementation the card game Bluff.',
          homepage: "https://projectbluff.com"
        }}
        className="project-card"
        style={{ animationDelay: `${projects_map.length * 0.1}s` }}
    />)
    return projects_map;
  };

  return (
    <ProjectsSection>
      <Container>
        <PageTitle>Personal Projects</PageTitle>
        <PageSubtitle>
          A collection of my side projects
        </PageSubtitle>

        <ProjectsGrid ref={gridRef}>
          {renderContent()}
        </ProjectsGrid>

        <ActionSection>
          <GitHubButton href="https://github.com/Snoyark" target="_blank">
            <i className="fab fa-github"></i>
            View All on GitHub
          </GitHubButton>
        </ActionSection>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;