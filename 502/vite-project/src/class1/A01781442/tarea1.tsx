import '../../index.css'
const Arfunc= ()=>{

  const details={name:"Rafael",lastName:"Blanga"};
  const Greet=()=>{
    const {name,lastName}= details;
    return `Hello ${name} ${lastName} !!`
  }
  return(
    <>
    <div className="Center">
    <h1>Tarea 1, greeting con ES6+</h1>
    <div>
      {Greet()}
    </div>
    <a href='/src/class1/A01781442/index.html'>
      Regresar a Menu
    </a>
    </div>
    </>
  );
};
//Export module
export default Arfunc;