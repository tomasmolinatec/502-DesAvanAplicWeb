import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../class2/A01025119/Tarea_2/Input.tsx';
import Button from '../../class2/A01025119/Tarea_2/Button.tsx';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        console.log('Login successful');
        navigate('/travel-request', { state: { username } });
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      {error && <p style={styles.error}>{error}</p>}

      <InputField
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button label={loading ? 'Loading...' : 'Submit'} onClick={handleSubmit} />
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
