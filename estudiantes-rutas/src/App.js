import './App.css';
import React from 'react';
import BarraNav from './Componentes/BarraNav';
import Encabezado from './Componentes/Encabezado';

class App extends React.Component {
  render() {
    return (
      <div className="pantalla-estudiante-seleccion-de-parada-container1">
        <Encabezado></Encabezado>
        <div className="pantalla-estudiante-seleccion-de-parada-container3">
          <BarraNav></BarraNav>
          <section className="pantalla-estudiante-seleccion-de-parada-container4">
          <div class="container">
        <h1>Seleccione su ruta:</h1>

        <div class="route-card" onclick="toggleDetails(this)">
            <h2>CAPULI</h2>
            <div class="details">
                <p>Ruta1 (Sur): EPN, Ladrón de Guevara, Av. Velasco Ibarra, Av. Pedro Vicente Maldonado, Av. Napo, calle Corazón, redondel de la Villaflora, Av. Pedro Vicente Maldonado hasta la parada El Capulí del eco-vía.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>GUAMANÍ</h2>
            <div class="details">
                <p>Ruta2 (Sur): EPN, Ladrón de Guevara, Oriental, Trébol, Av. Rumihuañi, Av. Simón Bolívar, Av. Morán Valverde, Av. Maldonado hasta el antiguo peaje.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>MACHACHI</h2>
            <div class="details">
                <p>Ruta3 (Sur): EPN, Ladrón de Guevara, Av. Patria, Pérez Guerrero, Bolivia, Av. Universitaria, Av. Mariscal Sucre, Av. Morán Valverde, Av. Oyacoto, Av. Pedro Vicente Maldonado, Carr. Panamericana hasta el Parque de Machachi.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>QUITUMBE</h2>
            <div class="details">
                <p>Ruta4 (Sur): EPN, Ladrón de Guevara, Av. Patria, Pérez Guerrero, Bolivia, Av. Universitaria, Av. Mariscal Sucre, Michelena, Av. Teniente Hugo Ortiz, Av. Cardenal de la Torre, Guamaní, Cusubamba, Av. Mariscal Sucre hasta el terminal Quitumbe.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>ECUATORIANA</h2>
            <div class="details">
                <p>Ruta5 (Sur): EPN, Ladrón de Guevara, Av. Patria, Pérez Guerrero, Bolivia, Av. Universitaria, Av. Mariscal Sucre hasta la iglesia de la Ecuatoriana.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>ESTADIO DEL AUCAS</h2>
            <div class="details">
                <p>Ruta6 (Sur): EPN, Ladrón de Guevara, Av. Patria, Pérez Guerrero, Bolivia, Av. Universitaria, Av. Mariscal Sucre, Cbo. Luis Iturralde, Av. Teniente Hugo Ortiz, Cardenal de la Torre, Av. Marqués de Solanda, Av. Rumichaca, Estadio del Aucas.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>QUICENTRO SUR</h2>
            <div class="details">
                <p>Ruta7 (Sur): EPN, Oriental, Av. Napo, Villaflora, Alonso de Angulo, Av. Teniente Hugo Ortiz, Quicentro Sur.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>SAN ANTONIO DE PICHINCHA</h2>
            <div class="details">
                <p>Ruta8 (Norte): EPN, Oriental, Av. Napo, Villaflora, Alonso de Angulo, Teniente Hugo Ortiz, Quicentro Sur.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>CARCELEN 1</h2>
            <div class="details">
                <p>Ruta9 (Norte): EPN, Oriental, Av. Patria, Av. América, Av. 10 de Agosto, Av. La Prensa hasta Carcelén 1.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>CONDADO SHOPPING</h2>
            <div class="details">
                <p>Ruta10 (Norte): EPN, Ladrón de Guevara, Av. Patria, Av. América, Av. 10 de Agosto, Av. La Prensa hasta Condado Shopping.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>CARCELEN 2</h2>
            <div class="details">
                <p>Ruta11 (Norte): EPN, Ladrón de Guevara, Av. Patria, Av. América, Av. 10 de Agosto, Av. La Prensa hasta Carcelén 2.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>CARAPUNGO</h2>
            <div class="details">
                <p>Ruta12 (Norte): EPN, Ladrón de Guevara, Oriental, Av. Patria, Pérez Guerrero, Bolivia, Av. Universitaria, Av. Mariscal Sucre hasta la iglesia de la Carapungo.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>PANAMERICANA</h2>
            <div class="details">
                <p>Ruta13 (Norte): EPN, Oriental, Av. Patria, Pérez Guerrero, Bolivia, Av. Universitaria, Av. Mariscal Sucre hasta Panamericana.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>SANGOQUI</h2>
            <div class="details">
                <p>Ruta14 (Valles): EPN, Ladrón de Guevara, Occidental, Av. Rumichaca, San Juan hasta Sangoqui.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>QUINCHE</h2>
            <div class="details">
                <p>Ruta15 (Norte): EPN, Oriente, Trébol, Rumiñahui, Vía Quito hasta el Quinche.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>CUMBAYÁ</h2>
            <div class="details">
                <p>Ruta16 (Valle): EPN, Ladrón de Guevara, Oriental, Trébol, Av. Simón Bolívar, Tumbaco, Cumbayá.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>TROLE NORTE ESTACIÓN</h2>
            <div class="details">
                <p>Ruta17: EPN, Ladrón de Guevara, Av. Occidente, Bolívar, Pedro del Toro hasta Estación del Trole.</p>
            </div>
        </div>
        <div class="route-card" onclick="toggleDetails(this)">
            <h2>ESTACIÓN EL RECREO</h2>
            <div class="details">
                <p>Ruta18 (Sur): EPN, Av. Pedro Maldonado hasta Estación El Recreo.</p>
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
