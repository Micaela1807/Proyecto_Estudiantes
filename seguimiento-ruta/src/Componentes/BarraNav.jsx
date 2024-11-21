import React from 'react';

function BarraNav () {
    return (
        <div className="barraNav-container1">
            <div className="barraNav-container3">
                <img
                    alt='estudiante'
                    src='https://cdn-icons-png.flaticon.com/512/8920/8920554.png'
                    className="barraNav-image"
                />
                <div className="barraNav-container4">
                    <p className="barraNav-user">Juan Perez</p>
                    <p className="barraNav-perfil">Estudiante</p>
                </div>
            </div>
            
            <div className="barraNav-container5">
                <div className='barraNav-container7'>
                    <button type="button" className="barraNav-inicio">
                        <span className="barraNav-Inicio-texto">
                            Inicio
                        </span>
                    </button>
                    <button type="button" className="barraNav-selRuta">
                        <span className="barraNav-SelRuta-texto">
                            Seleccionar Ruta
                        </span>
                    </button>
                    <button type="button" className="barraNav-selParada">
                        <span className="barraNav-SelParada-texto">
                            Seleccionar Parada
                        </span>
                    </button>
                    <button type="button" className="barraNav-estadoRuta">
                        <span className="barraNav-EstadoRuta-texto">
                            Ver estado Ruta
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BarraNav;

