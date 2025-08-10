import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
        <div className="flex space-x-2">
          {project.html_url && (
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaGithub size={20} />
            </a>
          )}
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm">
        {project.description || 'No description available'}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          {project.language && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {project.language}
            </span>
          )}
          {project.stargazers_count !== undefined && (
            <div className="flex items-center space-x-1">
              <FaStar size={14} />
              <span>{project.stargazers_count}</span>
            </div>
          )}
          {project.forks_count !== undefined && (
            <div className="flex items-center space-x-1">
              <FaCodeBranch size={14} />
              <span>{project.forks_count}</span>
            </div>
          )}
        </div>
      </div>
      
      {project.topics && project.topics.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {project.topics.slice(0, 3).map((topic, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;