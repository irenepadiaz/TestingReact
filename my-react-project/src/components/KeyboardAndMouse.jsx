import React from "react";

function KeyboardAndMouse() {
  let clickControl = (event) => {
    if (event.charCode === 13) {
      alert("Se ha pulsado la tecla ENTER");
    }
  }

  let manejaEntraRaton = (event) => {
    console.log("Entra el ratón", event);
  };
  
  let manejaSaleRaton = (event) => {
    console.log("Sale el ratón", event);
  };
  
  let manejaClickRaton = (event) => {
    console.log(`El usuario pulsa en x: ${event.clientX}, y: ${event.clientY}`);
  };

  const manejarPulsacion = (event) => {
    console.log("El tipo de este evento es: ", event.type);
  }

  return (
    <div>
        <input placeholder="Se lanzará alerta" onKeyPress={clickControl} />
        <input placeholder="No se lanzará alerta" />  
        <button
          onMouseEnter={manejaEntraRaton} 
          onMouseLeave={manejaSaleRaton}
          onClick={manejaClickRaton}>
            Pruebas con Eventos de ratón
        </button>  

        <h1>Eventos en React</h1>
 
        <button onTouchStart={manejarPulsacion} onClick={manejarPulsacion}>
          Púlsame
        </button>
    </div>
  );
}

export default KeyboardAndMouse;