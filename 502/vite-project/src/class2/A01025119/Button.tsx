import React from 'react';
import '../../class1/A01025119/webpage/main_design.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, type = 'button', ...rest }) => {
  return (
    <button className="main-button" type={type} {...rest}>
      {label}
    </button>
  );
};

export default Button;

