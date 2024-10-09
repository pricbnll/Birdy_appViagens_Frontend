import { useEffect, useState } from "react";
import "../Dashboard/Dashboard.css";
import Menu from "../../componentes/Menu/Menu";
import CardDestino from "../../componentes/CardDestino/CardDestino";
import Mapa from "../../componentes/Mapa/Mapa";
import api from "../../services/ApiUrl";

function Dashboard() {
  const [usuario, setUsuario] = useState({ nome: "Nome do Viajante", id: null });
  const [countDestinos, setCountDestinos] = useState(0);
  const [destinos, setDestinos] = useState([]);
  const [selectedDestino, setSelectedDestino] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(4);

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token)

        // Função para extrair o payload do token JWT
        const extrairInformacoesDoToken = (token) => {
            if (!token) return null;
            const base64Url = token.split('.')[1]; // Pega a segunda parte do token
            const base64 = window.atob(base64Url); // Decodifica a parte base64 (Payload)
            return JSON.parse(base64); // Retorna o payload decodificado
        };

        const payload = extrairInformacoesDoToken(token);
        console.log(payload)

        if (payload) {
            const usuarioNome = payload?.nome || "Nome do Viajante"; //.slice[0]
            const usuarioId = payload?.sub || null;

            // Define o nome e id do usuário no estado
            setUsuario({ nome: usuarioNome, id: usuarioId });
        }

    async function fetchData() {
        try {
            const usuarioId = usuario.id; 

            if (!usuarioId) {
              console.error("Usuário ID não encontrado");
              return;
            }
            
            const responseCountDestinos = await api.get(
              `/destinos/destinos_usuario/${usuarioId}`
              
            );
            const totalDestinoIdData = responseCountDestinos.data.totalDestinoId;
            setCountDestinos(totalDestinoIdData.count);
            setDestinos(totalDestinosIdData.rows);
    
        } catch (error) {
            console.error("Erro ao buscar destinos:", error);
        }
    }
    fetchData();
}, [usuario.id]);

  const handleMouseEnter = (destino) => {
    setSelectedDestino(destino);
    setZoomLevel(4);
  };

  const handleCardClick = (destino) => {
    setSelectedDestino(destino);
    setZoomLevel(10);
  };

  return (
    <>
      <div className="dashboard-container">
        <Menu />
        <div className="content">
          <div className="flex-row first-row">
            <div className="flex-column first-column">
              <div className="titulo">
                {/* <h2>Olá, {usuarioNome}! Bem-vindo(a) ao Birdy!</h2> */}
              </div>
              <div className="card">
                Destinos
                <div className="flex-row justify-content-between">
                  <img
                    className="icon-card"
                    src="../src/imgs/local-icon.png"
                    alt="Icone Localização"
                  />
                  <span className="num-card">{countDestinos}</span>
                </div>
              </div>
            </div>
            <div className="map-container">
              <Mapa
                selectedDestino={selectedDestino}
                destinos={destinos}
                zoomLevel={zoomLevel}
              />
            </div>
          </div>
          <div className="lista-locais">
            {destinos.map((destino) => (
              <CardDestino
                key={destino.id}
                nome={destino.nome}
                descricao={destino.descricao}
                cidade={destino.cidade}
                estado={destino.estado}
                pais={destino.pais}
                coordenadas={destino.coordenadas}
                onMouseEnter={() => handleMouseEnter(destino)}
                onClick={() => handleCardClick(destino)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
