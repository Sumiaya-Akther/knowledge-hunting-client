import React from 'react';
import { motion } from 'framer-motion';


const testimonials = [
  {
    name: "Afra Anjum Subha",
    photo: "https://i.ibb.co/Dm6nqkT/student2.jpg",
    quote: "This platform is amazing! I love how easy it is to share and read articles. It’s really helping me learn new things every day.",
  },
  {
    name: "Shakil Mahmud",
    photo: "https://i.ibb.co/2LN56Fq/student1.jpg",
    quote: "A perfect place for students to grow together by sharing their knowledge. The design is clean and responsive!",
  },
  {
    name: "Rafia Khan",
    photo: "https://i.ibb.co/JWbtvnjy/student3.jpg",
    quote: "Posting my first article was super easy. The commenting system is great for discussions and feedback!",
  },
];



const Testimonials = () => {
  return (
    <section className=" py-16">
      <h2 className="text-3xl md:text-4xl 
              font-bold mb-12 text-cyan-700 text-center">
        🌟 What Our Users Say
      </h2>
      <p className='text-center max-w-2xl mx-auto mb-10'>Hear what our users have to say about their experience on Knowledge Hunt.
        Real feedback from real learners, creators, and readers.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-300 p-8 rounded-xl shadow-lg hover:shadow-indigo-200 transition duration-300 text-center"
          >
            <img
              src={t.photo}
              alt={t.name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-200 mb-6 object-cover"
            />
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <h3 className="text-lg font-semibold text-indigo-800">{t.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;