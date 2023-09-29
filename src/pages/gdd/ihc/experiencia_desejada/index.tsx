import './styles.css'
import Sidebar from '../../../../components/basics/sidebar';
import { useState } from 'react';

import { 
  Button
 } from 'reactstrap';
import { Link } from 'react-router-dom';


const GDD: React.FC = () => {

  const [showExample, setShowExample] = useState(false);

  const handleClick = () => {
    setShowExample(!showExample);
  };


  
  return (
    <div className ="container">
      <header>
      <Sidebar />
      </header>
      <body>

    
    
    <div className ="about-container p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <h1 className="display-4 fst-italic text-center">Experiencia Desejada </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3"> Saber a experiência que você espera que seus jogadores sintam ao desenvolver um jogo digital é de extrema importância, pois isso orienta todo o processo de design 
      e desenvolvimento do jogo. Ter uma visão clara da experiência desejada ajuda a definir as metas e objetivos do jogo, molda as decisões de design e direciona a criação de mecânicas, narrativa, 
      arte e som. Definir emoções que você espera que seu jogador sinta no decorrer do jogo, fará você nortear e pontuar opções que auxiliem na implementação de fatores que andem em conjunto com 
      essa preferência.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    A principal questão a se fazer é, o que se espera projetar de alguma forma impulsiona, ou trás motivos para que o player se sinta dessa forma? Muitas vezes
                    menosprezamos considerações abstratas dentro de projetos técnicos, contudo esses sentimentos fazem com que você reveja suas possibilidades e estratégias sobre
                    como apresentar e controlar certas caracteristicas do jogo. Caso seu jogo não esteja induzindo o jogador a se sentir como seria desejado, talvez algum fator 
                    bem chamativo não esteva combinando bem com o jogo, também há a possibilidade de estar faltando algo. Pegue como exemplo um jogo ficticio onde é esperado 
                    que o jogador sinta terror e que faça as atitudes rápidas e que consequêntemente erre por conta disso, desse modo não bastaria simplesmente fazer um jogo que 
                    exige muito reflexo e velocidade, seria necessário também desenvolver uma tensão anterior para afobar o jogador, temas mais escuros e silenciosos grande parte do tempo
                    elementos macabros etc. Analisando o que se espera que o jogador sinta, é possível que você perceba várias melhoras e rumos que seu desenvolvimento pode tomar.
                    
                  </p>
                  <Button className="btn-bd-primary" onClick={handleClick}>
                    {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                  </Button></>             
              )}
              {!showExample && (
                <Button className="btn-bd-primary" onClick={handleClick}>
                {showExample ? 'Ocultar Exemplo' :'Mostrar Exemplo'}
              </Button>
              )}
    </div>
    
    <div className="col-lg-6 px-0 ">
      <h1 className="display-4 fst-italic"></h1>
      <p className="lead my-3 ">Conceito da Jogabilidade</p>
      <div className="container-text">
        <textarea className="full-width px-0"></textarea> 
      </div>

      <div className="spacing-container"></div> 
              {showExample && (
                <>
                  <p className="col-lg-6 px-0  ">Quais as caracteristicas que prendem o jogador para continuar jogando?</p>
                  <div className="container-text">
                  <textarea className="full-width px-0"></textarea> 
                  </div>
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                    {showExample ? 'Ocultar' : 'O que o prende?'}
                  </Button></>
                             
              )}
              {!showExample && (
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                  {showExample ? 'Ocultar' :'O que o prende?'}
                  </Button>
              )}
      
      <div className="spacing-container"></div> 
              {showExample && (
                <>
                  <p className="col-lg-6 px-0  ">Quais são os sentimentos que os jogadores devem sentir?</p>
                  <div className="container-text">
                  <textarea className="full-width px-0"></textarea> 
                  </div>
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                    {showExample ? 'Ocultar' : 'Sensações'}
                  </Button></>
                             
              )}
              {!showExample && (
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                  {showExample ? 'Ocultar' :'Sensações'}
                  </Button>
              )}       
      
    </div>
    </div>
    <div className="container-buttons">
            <Link to="/gdd">      
                <Button className="custom-button" onClick={handleClick}>
                    Salvar
                </Button>
            </Link>
    </div>
  
    </div>
    
    
  
   
    </body>
    </div>

  );
}
export default GDD;
