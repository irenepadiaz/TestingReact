import React, {Component}  from "react";

class AppClass extends Component {

    constructor(props) {
      super(props)

      this.state = {encendido: true};
      this.clickControl = this.clickControl.bind(this);
    }

    clickControl(event) {
      this.setState((prevState, props) => ({       
        encendido: !prevState.encendido
      }));
    }
    
    render() {
      return(
        <div>
          <hr />
          <button onClick={this.clickControl}>
            {this.state.encendido ? 'Activado' : 'Desactivado'}
          </button>
        </div>        
      );
    }
}

export default AppClass;