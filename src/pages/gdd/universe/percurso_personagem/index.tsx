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
    <h1 className="display-4 fst-italic text-center">Percurso do Personagem</h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">O percurso do personagem é o ponto mais importante de uma narrativa, aqui você estará desenvolvendo a respeito
      do desenvolver dos personagens principais, se preocupando com seu crescimento, problemas enfrentados, impasses e vários outros fatores.
      Em diversos jogos que contam com um protagonista principal, esse personagem deve ser desenvolvido e apresentar um crescimento, esse crescimento
      pode vir tanto de força (como normalmente é apresentado em jogos para combinar com a jogabilidade onde o personagem tem que crescer), quanto em 
      espirito (como normalmente é apresentado em jogos com alta prioridade na narrativa). Isso ocorre, devido ao fato que o desenvolver do personagem 
      é uma ferramenta essêncial para cativar os jogadores, já que muita das vezes, o jgoador simpatiza com os problemas enfrentados pelo personagem, já 
      que o mesmo percebe os sentimentos do personagem e também vivência um esforço por conta da dificuldade da jogabilidade.

    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Como o personagem principal e outros personagens que necessitam de um desenvolvimento irão crescer diante das adversidades?
                    descreva e pense internamente sobre os personagens, se ele se sente sozinho por estar ali por muito tempo, com medo, com esperança, 
                    seja o que for, é importante você perceber as qualidades do personagem e montar quais as consequências e vantagens de ele ser daquela 
                    forma. É facil você pensar em como o personagem vai crescer diante do contexto quando você se imagina no lugar dele, para que assim
                    você possa criar consequências com uma maior autenticidade.
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
      <p className="lead my-3 ">Desenvolvimento dos Personagens</p>
      <div className="container-text">
        <textarea className="full-width px-0"></textarea> 
      </div>
      
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
