import React from "react";
import { useNavigate } from "react-router-dom";
import "./ReturnButton.css";

const ReturnButton: React.FC = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/menu");
  };

  return (
    <button
      className="return-button"
      onClick={handleReturn}
      aria-label="Return to menu"
    >
      ← Return to Menu
    </button>
  );
};

export default ReturnButton;
