import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "#ffffff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
