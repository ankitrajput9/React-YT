import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Men's Tailoring", img: "/images/men-tailor.jpg" },
  { title: "Women's Tailoring", img: "/images/women-tailor.jpg" },
  { title: "Custom Fitting", img: "/images/custom-fit.jpg" },
];

const Services = () => (
  <motion.div className="p-10" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
    <h2 className="text-3xl font-semibold text-center mb-6">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, idx) => (
        <motion.div key={idx} className="shadow-lg p-4 rounded-xl" whileHover={{ scale: 1.05 }}>
          <img src={service.img} alt={service.title} className="rounded-md mb-3" />
          <h3 className="text-xl font-medium">{service.title}</h3>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Services;
