import React from "react";
import { motion } from "framer-motion";

const Designs = () => (
  <motion.div className="p-10" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
    <h2 className="text-3xl font-semibold text-center mb-6">Our Designs</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <motion.img
          key={i}
          src={`/images/design${i}.jpg`}
          alt={`Design ${i}`}
          className="rounded-xl shadow-md"
          whileHover={{ scale: 1.1 }}
        />
      ))}
    </div>
  </motion.div>
);

export default Designs;
