import './styles/Home.scss'

export default function Home() {

  document.title = "Home";

  if (sessionStorage.getItem("token-user")) {
    return (


      <div>

          <section className='banner'>
            <div className='inner-banner'>
              <h1>Voluntários pela Saúde!</h1>
              <h2>Hospitais e Clínicas precisam da sua ajuda</h2>
            </div>
          </section>

          <section id='texto-principal' >

            <div className='container-texto'>

              <div className='img-texto'>
                <img src="img/banner-teste2.jpg" alt="" />
              </div>
              <h4>Ajude hospitais voluntariamente.</h4>

              <p>O projeto "Voluntaria.se Saúde" é uma inovadora plataforma online que une voluntários a oportunidades significativas em clínicas e hospitais inspiradores. Ao promover conexões ágeis, facilitamos o envolvimento em ações sociais na área da saúde, fortalecendo comunidades. Os benefícios incluem acesso fácil a projetos transformadores, colaboração eficiente e impacto positivo no ambiente hospitalar. Além disso, proporcionamos uma plataforma intuitiva para organizações de saúde divulgarem suas iniciativas, maximizando a participação voluntária e promovendo uma sociedade mais solidária. Junte-se a nós para fazer a diferença na saúde das pessoas!"</p>

            </div>


          </section>

          <section id="servicos">

            <h4>O que oferecemos</h4>
            <h3>Conexão para voluntariado na área da saúde.</h3>

            <div className="cards">

              <div className="card">
                <div className="img-container">
                  <img src="img/VoluntarioClinica2.jpg" alt="" />
                </div>
                <h5>Voluntariado em Saúde Conectado</h5>
                <p>Plataforma de voluntariado conectando pessoas a oportunidades em clínicas e hospitais, promovendo ações sociais na área da saúde e impacto positivo nas comunidades.</p>
              </div>

              <div className="card">
                <div className="img-container">
                  <img src="img/VoluntarioClinica3.jpg" alt="" />
                </div>
                <h5>Colaboração na Saúde</h5>
                <p>Plataforma online que facilita a conexão entre voluntários e organizações de saúde, promovendo a colaboração para causas sociais e impacto positivo na comunidade.</p>
              </div>
              
              <div className="card">
                <div className="img-container">
                  <img src="img/VoluntarioClinica4.jpg" alt="" />
                </div>
                <h5>Impacto na Saúde Comunitária</h5>
                <p>Os voluntários exploram oportunidades, conectam-se a organizações de saúde e contribuem para projetos significativos, impulsionando o impacto social e fortalecendo a comunidade na área da saúde..</p>
              </div>

            </div>

          </section>

      </div>

    )
  } else {
    window.location = "/login";
  }
}

