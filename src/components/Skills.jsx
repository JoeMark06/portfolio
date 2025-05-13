import React from 'react';
import { FaCode, FaChartBar, FaPencilRuler, FaCogs } from 'react-icons/fa';

const skillsList = [
  {
    title: "Data Visualization & Analysis",
    icon: <FaChartBar className="text-4xl mb-4" />,
    description: "Development of professional dashboards using tools such as Power BI and Excel."
  },
  {
    title: "Design Workflows",
    icon: <FaPencilRuler className="text-4xl mb-4" />,
    description: "Design workflows, Power Automate, and Power Apps are tools for creating efficient application processes and custom applications."
  },
  {
    title: "Web Development",
    icon: <FaCode className="text-4xl mb-4" />,
    description: "Skills include proficiency in HTML, CSS, JavaScript, and various frameworks, as well as understanding of web design principles."
  },
  {
    title: "Process Improvement",
    icon: <FaCogs className="text-4xl mb-4" />,
    description: "Methodology that combines Lean manufacturing principles and Six Sigma techniques to improve processes."
  }
];

const Skills = () => {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Key Skills:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsList.map((skill, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <div className="text-green-500">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;