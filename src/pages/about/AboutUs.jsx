import React from 'react';
import { Link } from 'react-router';

const AboutUs = () => {
    return (
         <div className='p-5'>
             <div className="min-h-screen bg-gradient-to-br from-white to-cyan-100 rounded-2xl dark:from-gray-900 dark:to-gray-800  dark:text-white px-4 py-10 text-black">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-center text-lg mb-12">Empowering students to share knowledge and grow together</p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We are a group of passionate learners who believe that knowledge grows by sharing. This platform is built to connect students and enable them to publish, learn, and engage in meaningful discussions.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Allow students to post insightful articles</li>
            <li>Readers can like and comment on posts</li>
            <li>Articles are categorized and searchable</li>
            <li>Users can manage their own content securely</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Why We Built This</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Existing platforms are either too broad or too chaotic. We wanted to create a clean, safe, and focused space for students to write and be heard — without the distractions of traditional social media.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300">
            To become the most trusted student knowledge-sharing hub — where curiosity meets creativity and growth.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>MongoDB (Database)</li>
            <li>Express.js (Backend Framework)</li>
            <li>React.js (Frontend Library)</li>
            <li>Node.js (Runtime)</li>
            <li>Firebase (Authentication)</li>
            <li>Tailwind CSS (Styling)</li>
            <li>JWT (Security)</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Special Thanks</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Thanks to every student who believes in sharing knowledge and helping others grow. You are the reason this platform exists.
          </p>
        </section>
      </div>
    </div>
         </div>
    );
};

export default AboutUs;