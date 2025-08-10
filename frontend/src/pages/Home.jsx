import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm <span className="text-yellow-300">Aditya Singh Gautam</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Backend Web Developer & QA Engineer passionate about building scalable applications
            with expertise in Node.js, Express.js, MongoDB, and comprehensive testing frameworks.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/aditya3singh" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/gautam080706" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:singhaditya20030@gmail.com" className="hover:text-yellow-300 transition-colors">
              <FaEnvelope size={30} />
            </a>
          </div>
          <div className="space-x-4">
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn-secondary bg-white text-blue-600 hover:bg-gray-100">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                I'm a Backend Web Developer and QA Engineer with hands-on experience in 
                server-side development, API integration, and comprehensive testing frameworks. 
                Currently pursuing Computer Science Engineering at Lovely Professional University.
              </p>
              <p className="text-gray-600 mb-6">
                With 800+ coding problems solved and expertise in automation testing, 
                I specialize in building robust, scalable applications with a focus on 
                performance optimization and quality assurance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Backend & APIs</h3>
                  <p className="text-sm text-blue-600">Node.js, Express.js, MongoDB, RESTful APIs</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800">Testing & QA</h3>
                  <p className="text-sm text-green-600">Selenium, Postman, JMeter, TestNG</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800">Languages</h3>
                  <p className="text-sm text-purple-600">JavaScript, Java, C++, SQL</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800">Tools & Frameworks</h3>
                  <p className="text-sm text-orange-600">React.js, Git, JIRA, Jenkins</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-6xl font-bold">
                ASG
              </div>
              <p className="text-sm text-gray-500 mt-2">Aditya Singh Gautam</p>
              <p className="text-xs text-gray-400">Phagwara, Punjab</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Achievements & Certifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1510</div>
              <p className="text-gray-600">Contest Rating (GFG)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">800+</div>
              <p className="text-gray-600">Programming Problems Solved</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
              <p className="text-gray-600">Performance Improvement</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Certifications</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium">Software Development on SAP HANA</h4>
                  <p className="text-sm text-gray-600">Coursera • July 2025</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium">Full Stack Web Development</h4>
                  <p className="text-sm text-gray-600">Udemy • February 2025</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-medium">Self-Paced DSA</h4>
                  <p className="text-sm text-gray-600">GeeksforGeeks • August 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Key Projects</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-medium">GandalfBooks</h4>
                  <p className="text-sm text-gray-600">Full-stack CRUD application with RESTful APIs</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium">CodeEX Platform</h4>
                  <p className="text-sm text-gray-600">Secure blog platform with Rich Text Editor</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium">Q&A Platform</h4>
                  <p className="text-sm text-gray-600">CRUD functionalities with user authentication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;