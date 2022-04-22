import React, {useState} from "react";
import logo from "../logo.svg";

function Image() {
  const [reactLogo, setReactLogo] = useState(logo);

  // onLoad
  let cargaImagen = (event) => {
    console.log("La imagen se ha cargado correctamente");
  };

  // onError
  let errorImagen = (event) => {
    console.log("Error al cargar la imagen");
  }  

  return (
    <div>
      <img width="256" src={reactLogo} onLoad={cargaImagen} onError={errorImagen} />

      <button onClick={() => {setReactLogo(logo)}}>Cargar correctamente el logo</button>
      <button onClick={() => {setReactLogo('')}}>Cargar con error el logo</button>
    </div>
  );
}

export default Image;