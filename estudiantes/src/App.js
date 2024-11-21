import './App.css';
import React from 'react';
import BarraNav from './Componentes/BarraNav';
import Encabezado from './Componentes/Encabezado';

class App extends React.Component {
  render() {
    return (
      <div className="container1">
        <Encabezado></Encabezado>
        <div className="container2">
          <BarraNav></BarraNav>
          <section className="pantalla-estudiante-seleccion-de-parada-container4">
            <div className="pantalla-estudiante-seleccion-de-parada-container5">
              <div className="pantalla-estudiante-seleccion-de-parada-container6">
                <div class="container">
                  <h1>Seleccione su parada:</h1>
                  <div class="bus-stop-card" onclick="toggleDetails(this)">
                    <h2>Parada 1</h2>
                    <div class="details">
                      <p>Dirección: Calle Principal 123</p>
                    </div>
                  </div>
                  <div class="bus-stop-card" onclick="toggleDetails(this)">
                    <h2>Parada 2</h2>
                    <div class="details">
                      <p>Dirección: Avenida Secundaria 456</p>
                    </div>
                  </div>
                  <div class="bus-stop-card" onclick="toggleDetails(this)">
                    <h2>Parada 3</h2>
                    <div class="details">
                      <p>Dirección: Avenida Secundaria 456</p>
                    </div>
                  </div>
                  <div class="bus-stop-card" onclick="toggleDetails(this)">
                    <h2>Parada 4</h2>
                    <div class="details">
                      <p>Dirección: Avenida Secundaria 456</p>
                    </div>
                  </div>
                  <div class="bus-stop-card" onclick="toggleDetails(this)">
                    <h2>Parada 5</h2>
                    <div class="details">
                      <p>Dirección: Avenida Secundaria 456</p>
                    </div>
                  </div>
                  <p id="seats-available" class="seats-available">Asientos disponibles: 20</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <script>
        </script>
      </div>
    );
  }
}

function toggleDetails(card) {
  const details = card.querySelector(".details");
  details.style.display = details.style.display === "block" ? "none" : "block";
}
export default App;