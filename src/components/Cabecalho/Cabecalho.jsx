import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Cabecalho.scss";
import styles from "./Cabecalho.module.css";

export default function Cabecalho() {
  const rotaAtual = useLocation();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = sessionStorage.getItem("data-user");
    const user = storedUserInfo ? JSON.parse(storedUserInfo) : null;
    setUserInfo(user);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token-user");
    sessionStorage.removeItem("data-user");

    window.location.reload();
  };

  return (
    <>
      <header className={styles.cabecalho}>
        
        <div className="container-icon">
          <img src="/img/voluntario.png" alt="Mundo com duas mãos formando um coração" />
          <h1>voluntaria.se</h1>
        </div>

        

        <nav>
          <ul>
            <li>
              <Link to="/" className={rotaAtual.pathname === "/" ? "active" : ""}>
                HOME
              </Link>
            </li>
            {userInfo ? (
              <li>
                <button className="botao" onClick={handleLogout}>LOGOUT</button>
              </li>
            ) : (
              <li>
                <Link to="/login" className={rotaAtual.pathname === "/login" ? "active" : ""}>
                  LOGIN
                </Link>
              </li>
            )}
          </ul>
        </nav>
//bem vindo
        {userInfo && (
          <div className={styles.userInfo}>
            <img src="/img/voluntario-user.png" alt="ícone pessoa e coração do lado" />
            <p>Bem-vindo, {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
          </div>
        )}
      </header>
    </>
  );
}
