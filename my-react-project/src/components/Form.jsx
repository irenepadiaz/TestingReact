import React, { useState, useEffect, useRef} from "react";

function Form() {
  // const [nombre, setNombre] = useState('');
  // const [apellidos, setApellidos] = useState('');
  // const [resultado, setResultado] = useState('');

  // const [contador, setContador] = useState(0);
  const contador = useRef(0);

  const nombreRef = React.createRef();
  const apellidosRef = React.createRef();

  const [resultado, setResultado] = useState('');

  // const clickControl = (event) => {
  //   setResultado(`${nombre} ${apellidos}`);
  // }

  const clickControl = (event) => {
    setResultado(`${nombreRef.current.value} ${apellidosRef.current.value}`);
  }

  useEffect(() => {
    contador.current = contador.current + 1;
  })
 
  return (
    <div>
      <h1>
        Formulario en React
      </h1>

      <div ref={contador}>
        El componente se ha renderizado: {contador.current}
      </div>

      {/* <input //mejor en OnChange método controlador
        placeholder="Introduce tu nombre"
        onChange={(e) => {setNombre(e.target.value)}}> 
      </input> */}
      <input placeholder="Introduce tu nombre" ref={nombreRef}></input>

      {/* <input //mejor en OnChange método controlador
        placeholder="Introduce tus apellidos"
        onChange={(e) => {setApellidos(e.target.value)}}>
      </input> */}
      <input placeholder="Introduce tus apellidos" ref={apellidosRef}></input>


      <button onClick={clickControl}>
        Mostrar datos
      </button>
      
      <strong>
        {resultado}
      </strong>
    </div>
  );
}

export default Form;