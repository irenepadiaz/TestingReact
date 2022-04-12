import React, { useState } from "react";

function Bitcoin() {
    
    //Definimos bitcoin como variable de estado
    //setBitcoin como función que cambia el estado
    //y además el valor inicial de la variable de estado
    const [bitcoin, setBitcoin] = useState(0);

    return(
        <div>
            <h3>Cantidad de Bitcoins Actuales {bitcoin}</h3>
            <button onClick={ () => setBitcoin(bitcoin + 1) }>
                Aumentar  
            </button>
            <button onClick={ () => setBitcoin(bitcoin - 1) }>
                Disminuir  
            </button>
        </div>
    )

}

export default Bitcoin;