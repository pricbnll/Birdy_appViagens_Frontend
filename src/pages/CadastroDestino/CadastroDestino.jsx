import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import buscaCep from "../../util/buscaCep";
import buscaCoordenadas from "../../util/buscaCoordenadas";
import Menu from "../../componentes/Menu/Menu";
import api from "../../services/ApiUrl";

function CadastroDestino() {
  const { register, handleSubmit, setValue, formState, watch } = useForm();
  const [cep, setCep] = useState("");
  const [usuario, setUsuario] = useState({ nome: "", id: "" });
  const navigate = useNavigate();

  const onCepChange = async (e) => {
    const cepValue = e.target.value.replace(/\D/g, "");
    setCep(cepValue);
    if (cepValue.length === 8) {
      await buscaCep(cepValue, setValue);
    }
  };

  const observedCep = watch("cep");

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario) {
      setUsuario({ nome: usuario.nome, id: usuario.id });
    } else {
      console.error("Nenhum usuário encontrado no localStorage");
    }
  }, []);

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const onCoordenadasChange = async (e) => {
    const coordenadasValue = e.target.value;
    if (coordenadasValue) {
      await buscaCoordenadas(coordenadasValue, setValue);
    }
  };

  async function criarDestino(data) {
    try {
      const destinoData = { ...data, usuarioId: usuario.id };

      const response = await api.post("/destinos", {
        nome: destinoData.nome,
        descricao: destinoData.descricao,
        coordenadas_geo: destinoData.coordenadas_geo,
        cep: destinoData.cep || null,
        cidade: destinoData.cidade,
        estado: destinoData.estado,
        pais: destinoData.pais,
      });
      console.log("Destino criado:", response.data);
      
      if (response.status !== 201) {
        alert("Erro ao cadastrar destino.");
      } else {
        alert("Cadastro efetuado com sucesso!");
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Erro no cadastro do destino. catch");
      console.error("Erro no cadastro do destino:", error);
    }
  }

  return (
    <>
      <div className="flex-row">
        <Menu></Menu>
        <div className="container-bg">
          <h2 className="titulo">Novo destino</h2>
          <div>
            <form className="container" onSubmit={handleSubmit(criarDestino)}>
              <div className="row">
                <div className="col-12">
                  <span className="f-10">
                    ID: {usuario.id} {usuario.nome}
                  </span>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <span className="error-message">
                    {formState.errors?.nome?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="text"
                    placeholder="Nome"
                    {...register("nome", { required: "Campo Obrigatório" })}
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-12">
                  <span className="error-message">
                    {formState.errors?.descricao?.message}
                  </span>
                  <textarea
                    className="input-area w-100 descricao-destino"
                    type="text"
                    placeholder="Descrição do destino"
                    {...register("descricao", {
                      required: "Adicione uma descrição do destino",
                    })}
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-4">
                  <span className="error-message">
                    {formState.errors?.coordenadas_geo?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="text"
                    placeholder="Coordenadas Geográficas"
                    {...register("coordenadas_geo", {
                      required: "Informe a latitude e longitude do destino.",
                    })}
                    onBlur={onCoordenadasChange}
                  />
                </div>
                <div className="col-2">
                  <span className="error-message">
                    {formState.errors?.cep?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="text"
                    placeholder="CEP"
                    {...register("cep")}
                    value={observedCep || ""}
                    onChange={onCepChange}
                  />
                </div>
                <div className="col-2">
                  <span className="error-message">
                    {formState.errors?.cidade?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="text"
                    placeholder="Cidade"
                    {...register("cidade", { required: "Campo Obrigatório" })}
                  />
                </div>
                <div className="col-2">
                  <span className="error-message">
                    {formState.errors?.estado?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="text"
                    placeholder="Estado"
                    {...register("estado", { required: "Campo Obrigatório" })}
                  />
                </div>
                <div className="col-2">
                  <span className="error-message">
                    {formState.errors?.pais?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="text"
                    placeholder="País"
                    {...register("pais", { required: "Campo Obrigatório" })}
                  />
                </div>
              </div>

              <div className="row gap-5">
                <button
                  onClick={handleDashboard}
                  className="mt-5 btn-white btn-style w-50 col"
                  type="button"
                >
                  Cancelar
                </button>
                <button
                  className="mt-5 btn-yellow btn-style w-50 col"
                  type="submit"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CadastroDestino;
