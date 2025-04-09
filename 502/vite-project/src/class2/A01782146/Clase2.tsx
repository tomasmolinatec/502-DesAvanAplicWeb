import LoginComponent from "./components/Login";
import "/src/App.css";

interface Clase2Props {
  onLoginSuccess: () => void;
}

const Clase2 = ({ onLoginSuccess }: Clase2Props) => {
  return (
    <div>
      <LoginComponent onLoginSuccess={onLoginSuccess} />
    </div>
  );
};

export default Clase2;
