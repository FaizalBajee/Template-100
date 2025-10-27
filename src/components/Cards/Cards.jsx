import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Cards({ endPoint, header }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="card"
      onClick={() => navigate(endPoint)}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        width: "250px",
        height: "150px",
        background: "linear-gradient(135deg, #74ABE2, #5563DE)",
        borderRadius: "20px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.1rem",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        cursor: "pointer",
        textAlign: "center",
        padding: "1rem",
        transition: "all 0.3s ease",
      }}
    >
      {header}
    </motion.div>
  );
}
