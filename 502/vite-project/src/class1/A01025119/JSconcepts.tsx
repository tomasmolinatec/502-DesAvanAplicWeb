import { useState } from 'react';
import { ArrowFunction } from './Tarea_1/ArrowFunction.tsx';
import { Destructuring } from './Tarea_1/Destruction.tsx';
import { TemplateLiteral } from './Tarea_1/TemplateLiteral.tsx';
import { GreetExample } from './Tarea_1/GreetExample.tsx';

import './JsConcepts.css';

export function JsConceptsApp() {
  const [name] = useState("Do Kyu");
  const [age] = useState(22);

  return (
    <div className="js-container">
      <h1 className="js-title">JavaScript Concepts Practice</h1>
      <div className="js-content">
        <ArrowFunction />
        <Destructuring />
        <TemplateLiteral />
        <GreetExample name={name} age={age} />
      </div>
    </div>
  );
}
