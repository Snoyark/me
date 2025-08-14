import { useState, useEffect } from 'react';

const useGitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/Snoyark/repos?sort=updated&per_page=6');
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const repos = await response.json();
        
        if (repos.length === 0) {
          setProjects([]);
          return;
        }
        
        // Filter out forks and prioritize repos with descriptions
        const filteredRepos = repos
          .filter(repo => repo.description)
          .slice(0, 6);
        
        if (filteredRepos.length === 0) {
          // If no repos with descriptions, show all non-fork repos
          const allRepos = repos.filter(repo => !repo.fork).slice(0, 6);
          setProjects(allRepos);
        } else {
          setProjects(filteredRepos);
        }
        
      } catch (err) {
        console.error('Error fetching GitHub repos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export default useGitHubProjects;