import React from "react";
import Autonomia from "./Autonomia";

const styles = {
  height: 250,
  width: 250
}

class Hidrogeno extends React.PureComponent{
  render() {
    return (
      <div>
        <h3>Baterías de Hidrógeno</h3>
        <p>Las baterías de Hidrogeno, es una alternativa muy interesante a las baterías electricas.</p>
        <Autonomia km={ 500 } />
        <img style={ styles } 
              src='https://www.magnuscmd.com/wp-content/uploads/2019/06/Featured.jpg' 
              alt=''>
        </img>
      </div>  
    )
  }
}

export default Hidrogeno;
