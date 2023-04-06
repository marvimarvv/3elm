import { motion } from "framer-motion";

const Eye = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100"
      height="100"
    >
      {/* Encapsulating eyelid */}
      <motion.path
        d="M2,12 C2,6.5 7,2 12,2 C17,2 22,6.5 22,12 C22,17.5 17,22 12,22 C7,22 2,17.5 2,12 Z"
        fill="#f1c40f"
        initial={{ scaleY: 1 }}
        animate={{
          scaleY: [1, 0.1, 1],
          rotateX: [0, -90, 0],
          transformOrigin: "center",
          transition: { duration: 0.5, ease: "easeInOut", repeat: Infinity },
        }}
      />
      {/* Eyeball */}
      <motion.circle
        cx="12"
        cy="12"
        r="8"
        fill="#fff"
        stroke="#000"
        strokeWidth="1"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 0.8, 1.2, 1],
          rotate: [0, 5, -5, 0, 0],
          transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
        }}
      />
      {/* Pupil */}
      <motion.circle
        cx="12"
        cy="12"
        r="5"
        fill="#000"
        initial={{ y: 0 }}
        animate={{
          y: [0, 2, -1, 0],
          transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
        }}
      />
    </motion.svg>
  );
};

export default Eye;
