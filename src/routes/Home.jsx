import './styles/Home.scss'

export default function Home() {

  document.title = "Home";

  if (sessionStorage.getItem("token-user")) {
    return (


      <div>

          <section className='banner'>
            <div className='inner-banner'>
              <h1>Voluntarie-se!</h1>
              <h2>O lugar ideal para você se voluntariar.</h2>
            </div>
          </section>

          <section id='texto-principal' >

            <div className='container-texto'>

              <div className='img-texto'>
                <img src="img/voluntarios2-teste.png" alt="" />
              </div>
              <h4>Quer se voluntariar? Aqui é seu lugar!</h4>
              <p>O projeto "Voluntaria.se" é uma inovadora plataforma online que une voluntários a oportunidades significativas e organizações inspiradoras. Ao promover conexões ágeis, facilitamos o envolvimento em ações sociais, fortalecendo comunidades. Os benefícios incluem acesso fácil a projetos transformadores, colaboração eficiente, e impacto positivo. Além disso, proporcionamos uma plataforma intuitiva para organizações divulgarem suas iniciativas, maximizando a participação voluntária e promovendo uma sociedade mais solidária. Junte-se a nós para fazer a diferença!</p>

            </div>


          </section>

          <section id="servicos">

            <h4>O que oferecemos</h4>
            <h3>Conexão para voluntariado, fortalecendo comunidades com impacto social positivo.</h3>

            <div className="cards">

              <div className="card">
                <div className="img-container">
                  <img src="img/voluntariado5.png" alt="" />
                </div>
                <h5>Voluntariado Conectado</h5>
                <p>Plataforma de voluntariado conectando pessoas a oportunidades e organizações, promovendo ações sociais e impacto positivo.</p>
              </div>

              <div className="card">
                <div className="img-container">
                  <img src="img/voluntario4.jpg" alt="" />
                </div>
                <h5>Colaboração Social</h5>
                <p>Plataforma online que facilita a conexão entre voluntários e organizações, promovendo a colaboração para causas sociais e impacto comunitário.</p>
              </div>
              
              <div className="card">
                <div className="img-container">
                  <img src="img/voluntario3.jpg" alt="" />
                </div>
                <h5>Impacto Comunitário</h5>
                <p>Os voluntários exploram oportunidades, conectam-se a organizações, e contribuem para projetos significativos, impulsionando o impacto social e fortalecendo comunidades.</p>
              </div>

            </div>

          </section>

      </div>

    )
  } else {
    window.location = "/login";
  }
}

