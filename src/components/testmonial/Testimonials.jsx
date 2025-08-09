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
    <section className="py-16 px-6 md:px-12 bg-base-100">
      <h2 className="text-4xl font-extrabold mb-8 text-primary text-center">
        🌟 What Our Users Say
      </h2>
      <p className="max-w-3xl mx-auto mb-12 text-accent text-center text-lg">
        Hear what our users have to say about their experience on Knowledge Hunt.
        Real feedback from real learners, creators, and readers.
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="bg-secondary/20 backdrop-blur-md rounded-2xl p-8 shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <img
              src={t.photo}
              alt={t.name}
              className="w-24 h-24 rounded-full border-4 border-secondary mb-6 object-cover"
            />
            <p className="text-accent italic mb-6 max-w-[320px]">
              “{t.quote}”
            </p>
            <h3 className="text-xl font-semibold text-primary">{t.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
