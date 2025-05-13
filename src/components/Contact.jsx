import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-8">How can I help you:</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">ONLINE TRAINING</h3>
              <p className="text-gray-400">
                Complete professional training through an online course.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                DASHBOARD DEVELOPMENT
              </h3>
              <p className="text-gray-400">
                Development of customized dashboards in Power BI.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">DATA CONSULTING</h3>
              <p className="text-gray-400">
                Consulting for Power BI implementation and problem-solving.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8">Get in touch with me:</h2>
          <div className="space-y-4">
            <a
              href="https://linkedin.com/in/joe.mark.tolentino"
              className="flex items-center text-gray-400 hover:text-green-500"
            >
              <FaLinkedin className="mr-2" /> LinkedIn Profile
            </a>
            <a
              href="mailto:jayemtolentino0619@gmail.com"
              className="flex items-center text-gray-400 hover:text-green-500"
            >
              <FaEnvelope className="mr-2" /> jayemtolentino0619@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
