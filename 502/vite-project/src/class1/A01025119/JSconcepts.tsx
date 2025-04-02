import { useState } from 'react';
import { ArrowFunction } from './Tarea_1/ArrowFunction.tsx';
import { Destructuring } from './Tarea_1/Destruction.tsx';
import { TemplateLiteral } from './Tarea_1/TemplateLiteral.tsx';
import { GreetExample } from './Tarea_1/GreetExample.tsx';

export function JsConceptsApp() {
  const [name] = useState("Do Kyu");
  const [age] = useState(22);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>JavaScript Concepts Practice</h1>
      <ArrowFunction />
      <Destructuring />
      <TemplateLiteral />
      <GreetExample name={name} age={age} />
    </div>
  );
}
