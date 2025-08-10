import React, { useState } from 'react';
import { uploadResume } from '../api/resumeAPI';
import { FaUpload, FaTimes } from 'react-icons/fa';

const ResumeManager = ({ onUploadSuccess }) => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    description: '',
    category: 'General',
    file: null
  });

  const categories = ['General', 'Backend Developer', 'QA Engineer', 'Full Stack', 'Internship'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      file,
      displayName: prev.displayName || (file ? file.name.replace('.pdf', '') : '')
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file || !formData.displayName) {
      alert('Please select a file and provide a display name');
      return;
    }

    setUploading(true);
    try {
      await uploadResume(formData.file, formData.displayName, formData.description, formData.category);
      setFormData({ displayName: '', description: '', category: 'General', file: null });
      setShowUploadForm(false);
      onUploadSuccess();
    } catch (error) {
      alert('Failed to upload resume: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const resetForm = () => {
    setFormData({ displayName: '', description: '', category: 'General', file: null });
    setShowUploadForm(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Resume Management</h3>
        <button
          onClick={() => setShowUploadForm(!showUploadForm)}
          className="btn-primary inline-flex items-center space-x-2"
        >
          <FaUpload />
          <span>Add New Resume</span>
        </button>
      </div>

      {showUploadForm && (
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-medium">Upload New Resume</h4>
            <button
              onClick={resetForm}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resume File (PDF only) *
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                required
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Display Name *
              </label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleInputChange}
                placeholder="e.g., Backend Developer Resume"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description (Optional)
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Brief description of this resume version..."
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                disabled={uploading}
                className="btn-primary disabled:opacity-50"
              >
                {uploading ? 'Uploading...' : 'Upload Resume'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ResumeManager;