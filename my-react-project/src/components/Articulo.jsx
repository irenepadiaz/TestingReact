import React, { Component } from "react";
import PilasConvencionales from './PilasConvencionales';
import BateriasLitio from './BateriasLitio';
import Hidrogeno from "./Hidrogeno";
import Likes from "./Likes";
import Bitcoin from "./Bitcoin";

class Articulo extends Component {
  render() {
    return (
      <div>
        <PilasConvencionales />  
        <BateriasLitio />
        <Hidrogeno />
        <Likes />
        <Bitcoin />
      </div>
    )
  }
}
  	
export default Articulo;
