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
    <h1 className="display-4 fst-italic text-center">Níveis de Dificuldade </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">Em alguns jogos é interessante pensar em quais níveis de dificuldade o jogo possui, a respeito disso você pode pensar em algumas coisas.
      Seu jogo possui varias níveis de dificuldade? O jogador escolhe, controla isso ? De que forma essa mudança vai alterar o jogo de forma que ele altere sua dificuldade?
      O nível de dificuldade influencia a dificuldade do jogo como um todo, isso é diferente do aumento de dificuldade conforme a progressão do jogo. Os níveis de dificuldade
      podem ser responsáveis por alterar diversos fatores dentro do jogo, de forma que você altere a dificuldade alterando a forma como alguns fatores agem diferente da forma 
      natural do jogo.
      
    
      </p>
              
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Em um jogo de corrida, os níveis de dificuldade poderiam ser tratados como desafios opçionais, como o de escolher uma corrida mais dificil,
                    reduzir o tanto de combustivel, obstruir rotas etc. Vários fatores podem ser alterador no jogo em si para prover um maior ou menor desafio. 
                    Em um jogo de luta uma alteração poderia ser aumentar a dificuldade com que a IA combate o jogador, ou atribuir desvantagens ao jogador. Já 
                    em um genero de aventura/exploração, uma alteração poderia ser diminuir a quantidade de recursos que o personagem inicia, ou tirar a possibilidade
                    do personagem recomeçar novamente após uma derrota.
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
      <p className="lead my-3 ">Níveis de Dificuldade</p>
      <div className="container-text">
        <textarea className="full-width px-0"></textarea> 
      </div>
      
          
              <div className="spacing-container"></div> 
              
              {showExample && (
                <>
                  <p className="col-lg-6 px-0 ">Nível Iniciante</p>
                  <div className="container-text">
                  <textarea className="full-width px-0"></textarea> 
                  </div>
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                    {showExample ? 'Ocultar' : 'Nível Iniciante'}
                  </Button></>             
              )}
              {!showExample && (
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                  {showExample ? 'Ocultar' :'Nivel Iniciante'}
                  </Button>
              )}  

              <div className="spacing-container"></div>             
              {showExample && (
                <>
                  <p className="col-lg-6 px-0 ">Nível Mediano</p>
                  <div className="container-text">
                  <textarea className="full-width px-0"></textarea> 
                  </div>
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                    {showExample ? 'Ocultar' : 'Nível Mediano'}
                  </Button></>             
              )}
              {!showExample && (
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                  {showExample ? 'Ocultar' :'Nível Mediano'}
                  </Button>
              )}  

              <div className="spacing-container"></div> 
              {showExample && (
                <>
                  <p className="col-lg-6 px-0  ">Nível Experiente</p>
                  <div className="container-text">
                  <textarea className="full-width px-0"></textarea> 
                  </div>
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                    {showExample ? 'Ocultar' : 'Nível Experiente'}
                  </Button></>
                             
              )}
              {!showExample && (
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                  {showExample ? 'Ocultar' :'Nivel Experiente'}
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
