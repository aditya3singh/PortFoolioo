import React from 'react';
import { FaDownload, FaEye, FaToggleOn, FaToggleOff, FaTrash, FaCalendar, FaTag } from 'react-icons/fa';

const ResumeCard = ({ resume, onToggleStatus, onDelete, onDownload }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Backend Developer': 'bg-blue-100 text-blue-800',
      'QA Engineer': 'bg-green-100 text-green-800',
      'Full Stack': 'bg-purple-100 text-purple-800',
      'Internship': 'bg-orange-100 text-orange-800',
      'General': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || colors['General'];
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
      resume.isActive ? 'border-green-500' : 'border-gray-300'
    }`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{resume.displayName}</h3>
            {resume.isActive && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Active
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
            <div className="flex items-center space-x-1">
              <FaCalendar size={12} />
              <span>{formatDate(resume.uploadDate)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaTag size={12} />
              <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(resume.category)}`}>
                {resume.category}
              </span>
            </div>
          </div>

          {resume.description && (
            <p className="text-sm text-gray-600 mb-3">{resume.description}</p>
          )}

          <p className="text-xs text-gray-500">
            File: {resume.originalName}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
        <div className="flex space-x-2">
          <button
            onClick={() => onDownload(resume)}
            className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
          >
            <FaDownload size={14} />
            <span>Download</span>
          </button>
          
          <button
            onClick={() => window.open(`${API_BASE_URL}/${resume.path}`, '_blank')}
            className="inline-flex items-center space-x-1 text-green-600 hover:text-green-800 text-sm"
          >
            <FaEye size={14} />
            <span>Preview</span>
          </button>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onToggleStatus(resume._id)}
            className={`inline-flex items-center space-x-1 text-sm ${
              resume.isActive 
                ? 'text-orange-600 hover:text-orange-800' 
                : 'text-green-600 hover:text-green-800'
            }`}
          >
            {resume.isActive ? <FaToggleOff size={14} /> : <FaToggleOn size={14} />}
            <span>{resume.isActive ? 'Deactivate' : 'Activate'}</span>
          </button>

          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this resume?')) {
                onDelete(resume._id);
              }
            }}
            className="inline-flex items-center space-x-1 text-red-600 hover:text-red-800 text-sm"
          >
            <FaTrash size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;