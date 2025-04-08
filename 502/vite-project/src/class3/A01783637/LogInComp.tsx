import React, { useReducer } from 'react';
import InputField from './Props/InputField';
import Button from './Props/Button';

type State = {
  username: string;
  password: string;
  error: string;
  loading: boolean;
};

type Action =
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'RESET_ERROR' };

const initialState: State = {
  username: '',
  password: '',
  error: '',
  loading: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'RESET_ERROR':
      return { ...state, error: '' };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const Login: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (): void => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'RESET_ERROR' });

    setTimeout(() => {
      if (state.username === 'admin' && state.password === 'password') {
        console.log('Login successful');
      } else {
        dispatch({ type: 'SET_ERROR', payload: 'Invalid username or password' });
      }
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 1000);
  };

  return (
    <div>
      <h1>Login</h1>

      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}

      <InputField
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'SET_USERNAME', payload: e.target.value })
        }

      />

      <InputField
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
        }

      />

      <Button
        label={state.loading ? 'Loading...' : 'Submit'}
        onClick={handleSubmit}

      />
    </div>
  );
};

export default Login;
