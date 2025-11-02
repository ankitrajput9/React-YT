import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.div className="p-10" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
    <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
    <form className="max-w-lg mx-auto space-y-4">
      <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
      <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
      <textarea placeholder="Message" className="w-full border p-2 rounded h-32"></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
    </form>
  </motion.div>
);

export default Contact;
