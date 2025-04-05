import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../class1/A01784238/index.css'
import SimpleCounter from './SimpleCounter'
import SimpleFetch from './SimpleFetch'
import TravelForm from './TravelForm'
import Login from './LoginForm'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <h2>Using useState Example</h2>
        <SimpleCounter />
        <h2>Using useEffect Example</h2>
        <SimpleFetch />
        <h2>Travel Request Form usign useReducer</h2>
        <TravelForm />
        <h2>Login Form using useReducer</h2>
        <Login />
    </StrictMode>,
)
