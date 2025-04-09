interface User {
  name: string;
  age: number;}


function App() {
  const user = ({
    name: "Juan",
    age: 25,
  
  });

  //fucnion que actualizar el artibuto de usuario segun el nombre del input
  // Before
function greet(user: User) {
  return "Hello, " + user.name + "! You are " + user.age + " years old.";
}

// After (using template literals + destructuring)
const greet_es6 = ({ name, age }: User) => `Hello, ${name}! You are ${age} years old.`;


  return (
    <>
    <p>before es6</p>
    <p>{greet(user)}</p>
    <p>after es6</p>
    <p>{greet_es6(user)}</p>




    <a href="/src/menu/A01028038/index.html">Menu</a>
    </>
  )
}
export default App
