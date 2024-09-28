import "../Login/Login.css";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import { useLogin } from "../../services/useLogin";

function Login() {
  const { register, handleSubmit } = useForm();
  const loginMutation = useLogin();

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <>
      <div className="flex-row login-bg">
        <div className="form-container-login column">
          <div className="img-login">
            <Link to="/">
              <img
                src="../src/imgs/frase-login.png"
                alt="Birdy colecione suas histórias"
              />
            </Link>
          </div>

          <h2>Login</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="input-login column"
          >
            <input
              className="input-area"
              type="email"
              placeholder="E-mail"
              {...register("email")}
            />
            <input
              className="input-area"
              type="password"
              placeholder="Senha"
              {...register("password")}
            />{" "}
            <br />
            <button type="submit" className="btn-style btn-yellow">
              Entrar
            </button>
          </form>
          <div className="flex-row f-12">
            <p className="space f-branco">Ainda não tem cadastro?</p>
            <Link className="texto-link" to="/cadastro-usuario">
              <span className="texto-link">Cadastrar</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
