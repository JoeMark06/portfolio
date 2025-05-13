import React, { useState } from 'react';

const projects = [
  {
    title: 'SALES REPORT',
    type: 'DASHBOARD SALES REPORT',
    image: '/dist/assets/salesreport.png',
    description:
      'The main objectives of a sales dashboard in Power BI are to track sales performance and analyze product and team effectiveness.',
  },
  {
    title: 'FINANCIAL ANALYSIS',
    type: 'DASHBOARD FINANCIAL REPORT',
    image: '/dist/assets/financialreport.png',
    description:
      'Track and monitor financial health and performance across key areas with essential KPIs including revenue, expenses, and ROI.',
  },
  {
    title: 'PROJECT MANAGEMENT',
    type: 'DASHBOARD PROJECT MANAGEMENT',
    image: '/dist/assets/PMreport.png',
    description:
      'Monitor project timelines, resource allocation, and progress tracking across multiple initiatives.',
  },
  {
    title: 'SUPPLY CHAIN MANAGEMENT',
    type: 'DASHBOARD SUPPLY CHAIN',
    image: '/dist/assets/SCreport.png',
    description:
      'The main objectives of a sales dashboard in Power BI are to track sales performance and analyze product and team effectiveness.',
  },
  {
    title: 'HOSPITAL EMERGENCY ROOM',
    type: 'DASHBOARD ER MANAGEMENT',
    image: '/dist/assets/ERreport.png',
    description:
      'Monitor patient flow, resource utilization, and care outcomes in emergency department settings.',
  },
  {
    title: 'CHOCOLATE SALES REPORT',
    type: 'DASHBOARD CHOCOLATE SALES',
    image: '/dist/assets/Chocoreport.png',
    description:
      'Track product performance and identify customer preferences with detailed sales and demographic analysis.',
  },
  {
    title: '6S MANAGEMENT',
    type: 'DASHBOARD 6S MANAGEMENT',
    image: '/dist/assets/6Sreport.png',
    description:
      'Track and improve workplace organization with 5S methodology implementation metrics and progress indicators.',
  },
  {
    title: 'KEY PERFORMANCE INDICATOR',
    type: 'KPI DASHBOARD',
    image: '/dist/assets/KPIreport.png',
    description:
      'Monitor and evaluate performance metrics across various business functions with trend analysis and comparative metrics.',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">
        Explore some projects I have work on:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
            onClick={() => handleProjectClick(project)}
          >
            <div className="mb-4">
              <h4 className="text-sm text-gray-400">{project.type}</h4>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            </div>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-lg mb-4"
              />
            )}
            <p className="text-gray-400">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
