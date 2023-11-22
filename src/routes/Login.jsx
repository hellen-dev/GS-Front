import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './styles/Login.scss';

export default function Login() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    email: "",
    senha: "", // Corrigi de "senha" para "senha"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/usuarios");
      const users = await response.json();

      const user = users.find((u) => u.email === usuario.email && u.senha === usuario.senha);

      if (user) {
        alert("Login realizado com SUCESSO!");

        const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        console.log(tokenUser);

        sessionStorage.setItem("token-user", tokenUser);
        sessionStorage.setItem("data-user", JSON.stringify(user));
        
        navigate("/");
        window.location.reload();

      } else {
        alert("Login ou senha incorretos!");

        setUsuario({
          email: "",
          senha: "",
        });

      }
    } catch (error) {
      console.error("Erro durante o processo de login:", error);
      alert("Ocorreu um erro durante o login. Por favor, tente novamente mais tarde.");
    }
  };

  return (

    <div className="Login">
      <h1 className="title-form">Login</h1>

      <div>
        <form onSubmit={handleSubmit} className="form">
          <fieldset className="field-form">
            <legend className="legend-form">Dados de Acesso:</legend>
            <div className="email">
              <label htmlFor="idEmail">Email:</label>
              <input
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite seu email."
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="idSenha">Senha:</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite sua senha."
                value={usuario.senha}
                onChange={handleChange}
              />
            </div>
            <div>
              <button className="btn-login">LOGIN</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>

  );
}
