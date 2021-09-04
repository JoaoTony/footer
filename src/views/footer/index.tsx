import React, { FC } from 'react'

import './footer.css';

import SocialCard from '../../components/soceial-card';

const Footer: FC = () => (
  <div className="container"> 
    <div className="cardsWrapper">
    <div className="cardWrapper">
      <h1 className="title">Enfermidade</h1>
      <SocialCard />
      <p className="sub-title">Sede Administrativa</p>
      <p className="simple-text"> <strong>Telefone: </strong> 935 555 500</p>
      <p className="simple-text"> <strong>Província: </strong> Luanda</p>
      <p className="simple-text"> <strong>Endereço: </strong> SIAC Talatona - Via - A2, Luanda</p>
    </div>
    <div className="cardWrapper">
      <h1 className="title">NewsLatter</h1>
      <SocialCard />

      <p className="sub-title">Ambito Instituicional</p>

      <div className="card-with-border-wrapper">
        <div className="card-with-border">
          Admin Público
        </div>
        <div className="card-with-border">
          Registro de empresas
        </div>
        <div className="card-with-border">
          UIMO
        </div>
      </div>
    </div>
    <div className="cardWrapper">
      <h1 className="title">Mídias Sociais</h1>
      <SocialCard />

      <p className="sub-title">Contactos</p>
      <p className="simple-text"> <strong>Telefone: </strong> 935 555 500</p>
      <p className="simple-text"> <strong>Email: </strong> geral@siac.com</p>

      <div className="maptss-siac-logo"></div>

    </div>
    </div>
    <div className="footerOfFooter">
      <p className="copyrigth"> Copyrigth c 2017 SIAC - Serviço Integrado de Atendimento ao Cidadão</p>
      <button className="termsAndPol">Termos e Políticas de privacidade</button>
    </div>
  </div>
)

export default Footer;