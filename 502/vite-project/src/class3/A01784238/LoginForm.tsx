import React, { useReducer } from 'react';
import InputField from './InputField';
import Button from './Button';

// ------------------------
// Interface para el estado del formulario
interface LoginState {
    username: string;
    password: string;
    usernameError: string;
    passwordError: string;
    isValid: boolean;
}

// ------------------------
// Tipos de acciones para el reducer
type LoginAction =
    | { type: 'SET_USERNAME'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string }
    | { type: 'VALIDATE_FORM' }
    | { type: 'RESET_FORM' };

// ------------------------
// Estado inicial del formulario
const initialState: LoginState = {
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
    isValid: false
};

// ------------------------
// Reducer para manejar los cambios de estado y validación
const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.payload,
                usernameError: action.payload.length < 3 ? 'Username must be at least 3 characters' : ''
            };

        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.payload,
                passwordError: action.payload.length < 6 ? 'Password must be at least 6 characters' : ''
            };

        case 'VALIDATE_FORM':
            const usernameError = state.username.length < 3 ? 'Username must be at least 3 characters' : '';
            const passwordError = state.password.length < 6 ? 'Password must be at least 6 characters' : '';

            return {
                ...state,
                usernameError,
                passwordError,
                isValid: !usernameError && !passwordError
            };

        case 'RESET_FORM':
            return initialState;

        default:
            return state;
    }
};

// ------------------------
// Componente: Login
// Formulario de inicio de sesión con campos para username y password.
const Login: React.FC = () => {
    // Usando useReducer para manejar el estado del formulario
    const [state, dispatch] = useReducer(loginReducer, initialState);

    // Destructuring para acceder fácilmente a los valores del estado
    const { username, password, usernameError, passwordError, isValid } = state;

    // Función que maneja el envío del formulario
    const handleSubmit = () => {
        // Validar el formulario antes de enviar
        dispatch({ type: 'VALIDATE_FORM' });

        // Si el formulario es válido, proceder con el envío
        if (username.length >= 3 && password.length >= 6) {
            console.log('Username:', username);
            console.log('Password:', password);
            console.log('Form is valid:', isValid);

            // Opcional: resetear el formulario después del envío
            // dispatch({ type: 'RESET_FORM' });
        } else {
            console.log('Form has errors, please fix them');
        }
    };

    return (
        <div>
            {/* Contenedor principal con estilos flexbox para alineación vertical */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                padding: '20px',
                maxWidth: '300px',
                margin: '0 auto',
                border: '1px solid #eee',
                borderRadius: '8px'
            }}>
                <h3>Login</h3>

                {/* Campo de entrada para el nombre de usuario */}
                <InputField
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
                />
                {/* Mostrar error de validación del nombre de usuario si existe */}
                {usernameError && <p style={{ color: 'red', margin: '0', fontSize: '0.8rem' }}>{usernameError}</p>}

                {/* Campo de entrada para la contraseña */}
                <InputField
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                />
                {/* Mostrar error de validación de la contraseña si existe */}
                {passwordError && <p style={{ color: 'red', margin: '0', fontSize: '0.8rem' }}>{passwordError}</p>}

                {/* Botón de envío del formulario */}
                <Button
                    label="Submit"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};

export default Login;