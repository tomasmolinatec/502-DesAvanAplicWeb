import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = 'button',
    className = '',
    disabled = false
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
            disabled={disabled}
            style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                opacity: disabled ? 0.7 : 1
            }}
        >
            {label}
        </button>
    );
};

export default Button;