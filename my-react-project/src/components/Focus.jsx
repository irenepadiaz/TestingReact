import React from "react";

function Focus() {
  let manejarFoco = (event) => {
    if(event.type === 'focus') console.log("El elemento tiene foco");
    if(event.type === 'blur') console.log("El elemento pierde el foco");
  }
      
  return (
    <div>
        <h1>Eventos en React</h1>
  
        <input type="text" onFocus={manejarFoco} onBlur={manejarFoco} />
    </div>
  );
}

export default Focus;