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
    <h1 className="display-4 fst-italic text-center">Interface </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3"> A interface é responsável por transmitir informações relevantes aos jogadores, fornecendo feedback sobre suas ações e apresentando as 
      opções disponíveis dentro do jogo. Ela deve ser projetada de forma intuitiva e amigável para garantir que os jogadores possam compreender facilmente as mecânicas 
      do jogo e navegar pelo ambiente virtual. De certo modo, a interface ajuda a organizar as informações de maneira clara e visialmente atraente de modo que a mesma
      evite uam sobrecarga de dados na tela e facilitando o entendimento do jogo. A interface faz parte da cara inicial do jogo a primeira vista fornece várias informações
      relevantes que tendem a ser suporte para que o jogador se habitue mais facilmente ao jogo.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    São varias as caracteristicas que podem ser facilitadores para a orientação do jogador, através da interface os jogadores podem 
                    receber feedbacks de atributos extremamete relevantes, como a velocidade dentro de um jogo de corrida, a vida de um personagem conforme ele 
                    recebe dano, os controles que podem ser utilizados, a quantidade de recursos que podem ser alocados ou quanto faltam para que possam. São inúmeros
                    fatores que podem ser dispostos na interface, mas o mais importante é que a interface não seja poluída e que seja intuitiva. A interface serve de auxilio
                    principalmente para dispor informações na tela, porém, cuidado com jogos que necessitam de muitas informações, como exemplo MMORPG, é necessário muito cuidado
                    para balancear quais informações sao de extrema relevância, o que fica em segundo plano e qual o tamanho da interface. A interface jamais deve atrapalhar a 
                    jogabilidade do jogador, serve para ajuda-lo.
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
