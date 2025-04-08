import React, { useState } from 'react';
import InputField from './componentes/input_field';
import Button from './componentes/button';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (): void => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h1>Login</h1>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default Login;
