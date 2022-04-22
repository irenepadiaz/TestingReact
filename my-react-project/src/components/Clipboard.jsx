import React from "react";

function Clipboard() {
  let handlerClipBoard = (event) => {
    let data = event.clipboardData.getData('Text');
    
    console.log(`Texto en el clipboard: ${data || "<Sin datos>"}`);
  }
  
  return (
    <div>
      <input type="text" onPaste={handlerClipBoard} />
    </div>
  );
}

export default Clipboard;