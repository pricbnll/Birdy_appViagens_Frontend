import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../../componentes/Menu/Menu'
import '../ListaDestinos/ListaDestinos.css'
import api from "../../services/ApiUrl";

function ListaDestinos() {
    const [usuario, setUsuario] = useState({
        nome: "Nome do Viajante",
        id: null,
      });
    const [destinos, setDestinos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token);
    
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        console.log(usuario);
    
        setUsuario(usuario.nome);

        const carregarDestinos = async () => {
            try {
                if (!usuario.id) {
                    console.error("Usuário ID não encontrado");
                    return;
                  }
                  const responseListaDestinos = await api.get(
                    `/destinos/destinos_usuario/${usuario.id}`
                  );
          
                  const totalDestinoIdData = responseListaDestinos.data;
                  setDestinos(totalDestinoIdData.rows);
                  
                } catch (error) {
                  console.error("Erro ao buscar destinos:", error);
                }
              }
              carregarDestinos();
            }, [usuario.id]);
          

    const handleAlterar = (id) => {
        navigate(`/alterar-local/${id}`)
    }

    const handleExcluir = async (id) => {
        const confirmar = window.confirm("Tem certeza que deseja excluir este destino?")

        if (confirmar) {
            try {
                const response = await api.delete(`/destinos/${id}`)

                if (response.status === 200) {
                    setDestinos(destinos.filter(destino => destino.id !== id));
                    alert("destino excluído com sucesso!")
                } else {
                    alert("Erro ao excluir o destino.")
                }
            } catch (error) {
                alert("Erro ao excluir o destino.")
            }
        }
    }

    return (
        <>
            <Menu></Menu>
            <div className="destinos-container ">
                <h2 className="titulo">Meus Destinos</h2>
                {destinos.length > 0 ? (
                    <table className="tabela-destinos">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {destinos.map((destino) => (
                                <tr key={destino.id}>
                                    <td>{destino.nome}</td>
                                    <td>{destino.cidade}</td>
                                    <td>{destino.estado}</td>
                                    <td className='acoes-coluna'>
                                        <img
                                            src="../src/assets/alterar-icon.png"
                                            alt="Alterar"
                                            className="icon-alterar"
                                            onClick={() => handleAlterar(destino.id)}
                                        />
                                        <img
                                            src="../src/assets/excluir-icon.png"
                                            alt="Excluir"
                                            className="icon-excluir"
                                            onClick={() => handleExcluir(destino.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Nenhum destino cadastrado.</p>
                )}
            </div>
        </>
    )
}

export default ListaDestinos
