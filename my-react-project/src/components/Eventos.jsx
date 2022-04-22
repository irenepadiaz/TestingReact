import React from "react";

function Eventos() {

  const clickControl = (event) => {
    console.log("Objeto evento: ", event);
  }

  const clickControlLink = (event) => {
    event.preventDefault();
    console.log("Objeto evento: ", event);
  }

  return (
    <div>
      <hr />
      <button onClick={clickControl}>
        Púlsame
      </button>
      <hr />
      <a href="https://www.google.es" onClick={clickControlLink}>
        Ir a Google
      </a>
    </div>
  )
}

export default Eventos;