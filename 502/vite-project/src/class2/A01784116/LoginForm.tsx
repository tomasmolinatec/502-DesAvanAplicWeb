import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import ReturnButton from "../../Celula_A01784116_Tomas/components/ReturnButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div>
      <ReturnButton />
      <h1>Login</h1>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default Login;
