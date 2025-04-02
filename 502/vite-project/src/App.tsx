import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ArrowFunction } from './class1/ArrowFunction.tsx'
import { Destructuring } from './class1/Destruction.tsx'
import { TemplateLiteral } from './class1/TemplateLiteral.tsx'
import { GreetExample } from './class1/GreetExample.tsx'

function App() {
  const [name] = useState("Do Kyu");
  const [age] = useState(22);

  return (
    <div className="App">
      <h1>JavaScript Concepts Practice</h1>
      <ArrowFunction/>
      <Destructuring/>
      <TemplateLiteral/>
      <GreetExample name={name} age={age} />
    </div>
  );
}

export default App;
