import React, { useState, ChangeEvent } from 'react';
import InputField from './Input.tsx';
import Button from './Button.tsx';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    const { email, password } = formData;

    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    setError('');
    console.log('Login attempt:', formData);
  };

  return (
    <div style={styles.container}>
      <h2>Login Page</h2>
      {error && <p style={styles.error}>{error}</p>}
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button label="Log In" onClick={handleLogin} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center' as const,
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};

export default Login;
