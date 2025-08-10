import React, { useState, useEffect } from 'react';
import { getAllResumes, toggleResumeStatus, deleteResume } from '../api/resumeAPI';
import { FaDownload, FaPlus, FaFilter } from 'react-icons/fa';
import ResumeManager from '../components/ResumeManager';
import ResumeCard from '../components/ResumeCard';

const Resume = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showManager, setShowManager] = useState(false);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'General', 'Backend Developer', 'QA Engineer', 'Full Stack', 'Internship'];

  useEffect(() => {
    loadResumes();
  }, []);

  const loadResumes = async () => {
    try {
      const data = await getAllResumes();
      setResumes(data);
    } catch (err) {
      console.error('Failed to load resumes:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      await toggleResumeStatus(id);
      await loadResumes();
    } catch (err) {
      alert('Failed to update resume status');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteResume(id);
      await loadResumes();
    } catch (err) {
      alert('Failed to delete resume');
    }
  };

  const handleDownload = (resume) => {
    window.open(`http://localhost:5000/${resume.path}`, '_blank');
  };

  const filteredResumes = filterCategory === 'All' 
    ? resumes 
    : resumes.filter(resume => resume.category === filterCategory);

  const activeResumes = resumes.filter(resume => resume.isActive);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume Collection</h1>
          <p className="text-xl text-gray-600">
            Multiple versions of my resume tailored for different roles and opportunities.
          </p>
        </div>

        {/* Quick Download Section for Active Resumes */}
        {activeResumes.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Quick Download</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeResumes.map((resume) => (
                <div key={resume._id} className="border border-gray-200 rounded-lg p-4 text-center">
                  <h3 className="font-medium text-gray-900 mb-2">{resume.displayName}</h3>
                  <p className="text-sm text-gray-600 mb-3">{resume.category}</p>
                  <button
                    onClick={() => handleDownload(resume)}
                    className="btn-primary inline-flex items-center space-x-2 text-sm"
                  >
                    <FaDownload size={14} />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Admin Management Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setShowManager(!showManager)}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <FaPlus />
              <span>Manage Resumes</span>
            </button>

            <div className="flex items-center space-x-2">
              <FaFilter className="text-gray-500" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {showManager && (
            <div className="mb-6">
              <ResumeManager onUploadSuccess={loadResumes} />
            </div>
          )}
        </div>

        {/* Resume List */}
        <div className="space-y-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading resumes...</p>
            </div>
          ) : filteredResumes.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                {filterCategory === 'All' ? 'No resumes found.' : `No resumes found in "${filterCategory}" category.`}
              </p>
              <button
                onClick={() => setShowManager(true)}
                className="btn-primary"
              >
                Upload Your First Resume
              </button>
            </div>
          ) : (
            filteredResumes.map((resume) => (
              <ResumeCard
                key={resume._id}
                resume={resume}
                onToggleStatus={handleToggleStatus}
                onDelete={handleDelete}
                onDownload={handleDownload}
              />
            ))
          )}
        </div>

        {/* Skills & Experience Preview */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Node.js/Express.js</span>
                <span className="text-blue-600">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span>JavaScript/Java</span>
                <span className="text-blue-600">Expert</span>
              </div>
              <div className="flex justify-between">
                <span>Selenium/TestNG</span>
                <span className="text-blue-600">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span>MongoDB/SQL</span>
                <span className="text-blue-600">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span>API Testing (Postman)</span>
                <span className="text-blue-600">Expert</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Backend Web Development Intern</h4>
                <p className="text-sm text-gray-600">Prodigy InfoTech • February 2025 - Present</p>
                <p className="text-xs text-gray-500 mt-1">Server-side development, API integration, performance optimization</p>
              </div>
              <div>
                <h4 className="font-medium">Computer Science Student</h4>
                <p className="text-sm text-gray-600">Lovely Professional University • August 2022 - Present</p>
                <p className="text-xs text-gray-500 mt-1">CGPA: 6.4 • Focus on Backend Development & Testing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Categories Info */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Resume Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded">
              <h4 className="font-medium text-blue-800">Backend Developer</h4>
              <p className="text-gray-600">Focused on Node.js, Express.js, APIs</p>
            </div>
            <div className="bg-white p-3 rounded">
              <h4 className="font-medium text-green-800">QA Engineer</h4>
              <p className="text-gray-600">Selenium, TestNG, API Testing</p>
            </div>
            <div className="bg-white p-3 rounded">
              <h4 className="font-medium text-purple-800">Full Stack</h4>
              <p className="text-gray-600">Complete MERN stack experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;