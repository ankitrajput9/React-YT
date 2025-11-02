import React from "react";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div className="p-10 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <img src="/images/tailor-banner.jpg" alt="Tailor Banner" className="mx-auto rounded-xl shadow-lg" />
    <h2 className="text-3xl font-semibold mt-6">Welcome to StitchCraft</h2>
    <p className="mt-4 text-gray-600">Custom-tailored elegance made just for you.</p>
  </motion.div>
);

export default Home;
