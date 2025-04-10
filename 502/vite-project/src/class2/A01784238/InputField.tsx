import React from 'react';

interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    name?: string;
    className?: string;
    disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
    type,
    placeholder,
    value,
    onChange,
    required = false,
    name,
    className = '',
    disabled = false
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            name={name}
            className={className}
            disabled={disabled}
            style={{
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                width: '100%',
                boxSizing: 'border-box',
                fontSize: '14px'
            }}
        />
    );
};

export default InputField;