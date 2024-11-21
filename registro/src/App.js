import React from 'react';
import './App.css';
import Campo from './Componentes/Campo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campos: [
        { titulo: "Nombre", texto: "Ingrese su nombre" },
        { titulo: "Apellido", texto: "Ingrese su primer apellido" },
        { titulo: "Correo Institucional", texto: "alguien@epn.edu.ec" },
        { titulo: "Código Único", texto: "Ingrese su número único" },
      ],
    };
  }

  render() {
    return (
      <div className="container1">
        <div className="container2">
          <div className="container4">
            <h1 className="titulo">Registro de Estudiantes</h1>
            {this.state.campos.map((campo, index) => (
              <Campo
                key={index}
                titulo={campo.titulo}
                texto={campo.texto}
              />
            ))}
            <div className="contraseña-registro">
              <label className="contraseña-titulo">Contraseña</label>
              <input
                type="password"
                required
                placeholder="Cree una Contraseña"
                className="contraseña-relleno"
              />
            </div>
            <div className="boton">
              <button type="submit" className="boton-registrar">
                <span>Registrar</span>
              </button>
            </div>
          </div>
        </div>
        <div className="container3">
          <img
            alt="logoepn"
            src="/polibus-logo-600w.png"
            className="logoepn-registro"
          />
        </div>
      </div>
    );
  }
}

export default App;
