import { useState } from 'react';
import { ArrowFunction } from './ArrowFunction.tsx';
import { Destructuring } from './Destruction.tsx';
import { TemplateLiteral } from './TemplateLiteral.tsx';
import { GreetExample } from './GreetExample.tsx';

export function JsConceptsApp() {
  const [name] = useState("Do Kyu");
  const [age] = useState(22);

  return (
    <div className="App">
      <h1>JavaScript Concepts Practice</h1>
      <ArrowFunction />
      <Destructuring />
      <TemplateLiteral />
      <GreetExample name={name} age={age} />
    </div>
  );
}
