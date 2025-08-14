import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(45, 55, 72, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(99, 179, 237, 0.2);
  transition: all 0.3s ease;
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

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  color: #f7fafc;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-family: 'Source Code Pro', monospace;
`;

const CardDescription = styled.p`
  color: #a0aec0;
  line-height: 1.6;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(99, 179, 237, 0.1);
  border-radius: 0.5rem;
  border-left: 3px solid #63b3ed;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
`;

const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a0aec0;
  font-size: 0.9rem;
`;

const LanguageDot = styled.span`
  width: 12px;
  height: 12px;
  background-color: ${props => props.color};
  border-radius: 50%;
`;

const Stats = styled.div`
  display: flex;
  gap: 1rem;
  color: #a0aec0;
  font-size: 0.85rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    i {
      color: #63b3ed;
    }
  }
`;

const CardLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(99, 179, 237, 0.2);
  color: #63b3ed;
  text-decoration: none;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(99, 179, 237, 0.3);

  &:hover {
    background: rgba(99, 179, 237, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 179, 237, 0.2);
  }

  &.demo {
    background: rgba(128, 90, 213, 0.2);
    color: #805ad5;
    border-color: rgba(128, 90, 213, 0.3);

    &:hover {
      background: rgba(128, 90, 213, 0.3);
      box-shadow: 0 4px 12px rgba(128, 90, 213, 0.2);
    }
  }

  @media (max-width: 480px) {
    justify-content: center;
  }

  i {
    font-size: 0.9rem;
  }
`;

const LoadingCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 200px;
  opacity: 1;
  transform: none;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(99, 179, 237, 0.3);
  border-top: 3px solid #63b3ed;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  color: #a0aec0;
  font-size: 0.9rem;
`;

// Language colors mapping
const languageColors = {
  'JavaScript': '#f1e05a',
  'Python': '#3572A5',
  'Java': '#b07219',
  'TypeScript': '#2b7489',
  'HTML': '#e34c26',
  'CSS': '#563d7c',
  'C++': '#f34b7d',
  'C': '#555555',
  'Go': '#00ADD8',
  'Rust': '#dea584',
  'PHP': '#4F5D95',
  'Ruby': '#701516',
  'Swift': '#ffac45',
  'Kotlin': '#F18E33',
  'Dart': '#00B4AB',
  'Shell': '#89e051'
};

const ProjectCard = ({ project, className }) => {
  if (!project) return null;

  const languageColor = languageColors[project.language] || '#6b7280';
  const description = project.description || 'No description available';

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      {project.language && (
        <CardMeta>
          <Language>
            <LanguageDot color={languageColor} />
            {project.language}
          </Language>
          <Stats>
            <span>
              <i className="fas fa-star"></i>
              {project.stargazers_count}
            </span>
            <span>
              <i className="fas fa-code-branch"></i>
              {project.forks_count}
            </span>
          </Stats>
        </CardMeta>
      )}

      <CardLinks>
        {project.html_url && (
          <ProjectLink href={project.html_url} target="_blank">
            <i className="fab fa-github"></i>
            View Code
          </ProjectLink>
        )}
        {project.homepage && (
          <ProjectLink href={project.homepage} target="_blank" className="demo">
            <i className="fas fa-external-link-alt"></i>
            Live Demo
          </ProjectLink>
        )}
      </CardLinks>
    </Card>
  );
};

export const LoadingProjectCard = () => (
  <LoadingCard>
    <LoadingSpinner />
    <LoadingText>Loading projects from GitHub...</LoadingText>
  </LoadingCard>
);

export const ErrorProjectCard = () => (
  <Card style={{ opacity: 1, transform: 'none' }}>
    <CardHeader>
      <CardTitle>Unable to load projects</CardTitle>
      <CardDescription>
        Please check your internet connection and try again.
      </CardDescription>
    </CardHeader>
    <CardLinks>
      <ProjectLink href="https://github.com/Snoyark" target="_blank">
        <i className="fab fa-github"></i>
        View on GitHub
      </ProjectLink>
    </CardLinks>
  </Card>
);

export default ProjectCard