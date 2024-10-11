import { useForm } from "react-hook-form";
import { useState } from "react";
import buscaCep from "../../util/buscaCep";
import { useNavigate } from "react-router-dom";
// import checkCpfUnico from "../../util/cpfUnico"
// import checkEmailUnico from "../../util/emailUnico";
import api from "../../services/ApiUrl"

function CadastroUsuario() {
  const { register, handleSubmit, setValue, formState } = useForm();
  const [cep, setCep] = useState("");
  const navigate = useNavigate();

  const onCepChange = (e) => {
    const cepValue = e.target.value.replace(/\D/g, "");
    setCep(cepValue);
    if (cepValue.length === 8) {
      buscaCep(cepValue, setValue);
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  async function criarUsuario(data) {
    try {
      const response = await api.post("/usuarios", data);
      console.log("Requisição enviada com sucesso!");
      console.log(response.data);

      if (response.status !== 201) {
        alert("Erro ao cadastrar usuário.");
      } else {
        alert("Cadastro efetuado com sucesso!");
        navigate("/Login");
      }
      // const cpfUnico = await checkCpfUnico(data.cpf);
      // if (!cpfUnico) {
      //   alert("Este CPF já foi cadastrado");
      //   return;
      // }

      // const emailUnico = await checkEmailUnico(data.email);
      // if (!emailUnico) {
      //   alert("Este E-mail já foi cadastrado");
      //   return;
      // }
    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("Erro no cadastro do usuário.");
    }
  }

  return (
    <>
      <div className="flex-row">
        <div className="position-lateral">
          <img
            style={{height: "-webkit-fill-available"}}
            src="../src/imgs/lateral.jpg"
            alt="Imagem lateral tela notebook com natureza sobreposta"
          />
        </div>
        <div className="container-bg ml-0">
          <h2 className="titulo">Cadastre-se</h2>
          <div>
            <form onSubmit={handleSubmit(criarUsuario)}>
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
                <div className="col-4">
                  <span className="error-message">
                    {formState.errors?.sexo?.message}
                  </span>
                  <select
                    className="input-area w-100"
                    {...register("sexo", { required: "Campo Obrigatório" })}
                  >
                    <option value="">Sexo</option>
                    <option value="feminino">Feminino</option>
                    <option value="masculino">Masculino</option>
                    <option value="na">Prefiro não informar</option>
                  </select>
                </div>
                <div className="col-4">
                  <span className="error-message">
                    {formState.errors?.cpf?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="text"
                    placeholder="CPF"
                    {...register("cpf", { required: "Campo Obrigatório" })}
                  />
                </div>
                <div className="col-4">
                  <span className="error-message">
                    {formState.errors?.data_nascimento?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="date"
                    placeholder="Data de Nascimento"
                    {...register("data_nascimento", {
                      required: "Campo Obrigatório",
                    })}
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-8">
                  <span className="error-message">
                    {formState.errors?.email?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="text"
                    placeholder="E-mail"
                    {...register("email", { required: "Campo Obrigatório" })}
                  />
                </div>
                <div className="col-4">
                  <span className="error-message">
                    {formState.errors?.password?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="text"
                    placeholder="Senha"
                    {...register("password", { required: "Campo Obrigatório" })}
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-3">
                  <span className="error-message">
                    {formState.errors?.cep?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="text"
                    placeholder="CEP"
                    {...register("cep", { required: "Campo Obrigatório" })}
                    value={cep}
                    onChange={onCepChange}
                  />
                </div>
                <div className="col-7">
                  <span className="error-message">
                    {formState.errors?.endereco?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="text"
                    placeholder="Endereço"
                    {...register("endereco", { required: "Campo Obrigatório" })}
                  />
                </div>
                <div className="col-2">
                  <span className="error-message">
                    {formState.errors?.numero?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="text"
                    placeholder="Número"
                    {...register("numero", { required: "Campo Obrigatório" })}
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-4">
                  <span className="error-message">
                    {formState.errors?.bairro?.message}
                  </span>
                  <input
                    className="input-area w-100"
                    type="text"
                    placeholder="Bairro"
                    {...register("bairro", { required: "Campo Obrigatório" })}
                  />
                </div>
                <div className="col-4">
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
                <div className="col-4">
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
              </div>
              <div className="row gap-5">
                <button
                  onClick={handleLogin}
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

export default CadastroUsuario;
