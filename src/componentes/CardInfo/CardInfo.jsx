import React from 'react';
import './CardInfo.css';

function CardInfo({ nome, latitude, longitude, descricao, imagem, onClick, onOpenMobileMap, isMobile }) {
    return (
        <div className="dash-card-info-container">
            <div className="dash-card-info-column">
                <div className="dash-card-info-header">
                    <h6>{nome}</h6>
                    {isMobile ? (
                        <button className="dash-coord-btn" onClick={onOpenMobileMap}>
                            Exibir no mapa
                        </button>
                    ) : (
                        <button className="dash-coord-btn" onClick={onClick}>
                            Exibir no mapa
                        </button>
                    )}
                </div>
                <p>{descricao}</p>
                {imagem && <img src={imagem} alt={nome} className="dash-card-info-img" />}
            </div>
        </div>
    );
}

export default CardInfo;
