import { useState } from "react";
import { motion } from "framer-motion";

export default function EnvelopeReveal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="relative w-80 h-80 cursor-pointer" onClick={() => setIsOpen(true)}>
        {/* Top Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center origin-bottom"
          style={{ backgroundImage: "url('../Components/kirti.jsx')" }}
          initial={{ rotateX: 0 }}
          animate={isOpen ? { rotateX: -120 } : {}}
          transition={{ duration: 0.8 }}
        />
        {/* Bottom Flap */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-cover bg-center origin-top"
          style={{ backgroundImage: "url('/your-image.jpg')", backgroundPosition: "bottom" }}
          initial={{ rotateX: 0 }}
          animate={isOpen ? { rotateX: 120 } : {}}
          transition={{ duration: 0.8 }}
        />
        {/* Left Flap */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center origin-right"
          style={{ backgroundImage: "url('/your-image.jpg')", backgroundPosition: "left" }}
          initial={{ rotateY: 0 }}
          animate={isOpen ? { rotateY: -120 } : {}}
          transition={{ duration: 0.8 }}
        />
        {/* Right Flap */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center origin-left"
          style={{ backgroundImage: "url('/your-image.jpg')", backgroundPosition: "right" }}
          initial={{ rotateY: 0 }}
          animate={isOpen ? { rotateY: 120 } : {}}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );
}
